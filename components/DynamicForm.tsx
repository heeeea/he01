"use client";

import { calculateScore } from "@/lib/scoring";
import { createRecordId, saveRecord } from "@/lib/storage";
import type { FormField, FormValues, TesterConfig } from "@/lib/types";
import { ArrowRight, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

function getInitialValue(field: FormField) {
  if (field.type === "number" || field.type === "range") {
    return field.min ?? 0;
  }

  if (field.type === "checkbox") {
    return false;
  }

  return field.options?.[0]?.value ?? "";
}

function FieldControl({
  field,
  value,
  onChange
}: {
  field: FormField;
  value: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
}) {
  const baseClass =
    "mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-neutral-400 focus:border-ink focus:ring-4 focus:ring-ink/10";

  if (field.type === "textarea") {
    return (
      <textarea
        value={String(value)}
        onChange={(event) => onChange(event.target.value)}
        required={field.required}
        placeholder={field.placeholder}
        rows={8}
        className={`${baseClass} resize-none leading-7`}
      />
    );
  }

  if (field.type === "select") {
    return (
      <select
        value={String(value)}
        onChange={(event) => onChange(event.target.value)}
        required={field.required}
        className={baseClass}
      >
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  if (field.type === "radio") {
    return (
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {field.options?.map((option) => (
          <label
            key={option.value}
            className={`cursor-pointer rounded-lg border px-4 py-3 text-sm font-bold transition ${
              value === option.value ? "border-ink bg-ink text-white" : "border-black/10 bg-white text-neutral-700"
            }`}
          >
            <input
              className="sr-only"
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    );
  }

  return (
    <input
      value={String(value)}
      onChange={(event) =>
        onChange(field.type === "number" || field.type === "range" ? Number(event.target.value) : event.target.value)
      }
      required={field.required}
      placeholder={field.placeholder}
      min={field.min}
      max={field.max}
      step={field.step}
      type={field.type === "range" ? "range" : field.type === "number" ? "number" : "text"}
      className={baseClass}
    />
  );
}

export default function DynamicForm({ tester }: { tester: TesterConfig }) {
  const router = useRouter();
  const initialValues = useMemo(
    () =>
      tester.fields.reduce<FormValues>((values, field) => {
        values[field.id] = getInitialValue(field);
        return values;
      }, {}),
    [tester]
  );
  const [values, setValues] = useState<FormValues>(initialValues);

  function updateValue(fieldId: string, value: string | number | boolean) {
    setValues((current) => ({
      ...current,
      [fieldId]: value
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = calculateScore(tester, values);
    const id = createRecordId();

    saveRecord({
      id,
      slug: tester.slug,
      testerTitle: tester.title,
      createdAt: new Date().toISOString(),
      input: values,
      result
    });

    router.push(`/tester/${tester.slug}/result?id=${id}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {tester.fields.map((field) => (
        <label key={field.id} className="block rounded-lg border border-black/10 bg-white/86 p-4 shadow-card backdrop-blur">
          <span className="flex items-center justify-between gap-3 text-sm font-black text-ink">
            {field.label}
            {field.required ? <span className="text-xs text-coral">必填</span> : null}
          </span>
          {field.helpText ? <span className="mt-1 block text-xs leading-5 text-neutral-500">{field.helpText}</span> : null}
          <FieldControl field={field} value={values[field.id]} onChange={(value) => updateValue(field.id, value)} />
        </label>
      ))}

      <div className="sticky bottom-0 -mx-5 bg-gradient-to-t from-paper via-paper/95 to-transparent px-5 pb-4 pt-6 sm:static sm:m-0 sm:bg-none sm:p-0">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-black text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            生成风险报告
            <ArrowRight size={18} />
          </button>
          <button
            type="button"
            onClick={() => setValues(initialValues)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-base font-black text-ink"
          >
            <RotateCcw size={17} />
            重置
          </button>
        </div>
      </div>
    </form>
  );
}
