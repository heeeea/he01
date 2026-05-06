"use client";

import type { HistoryRecord } from "./types";

const STORAGE_KEY = "ai-tester-factory-history";

export function createRecordId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function getHistory() {
  if (typeof window === "undefined") {
    return [] as HistoryRecord[];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as HistoryRecord[]) : [];
  } catch {
    return [];
  }
}

export function getHistoryBySlug(slug: string) {
  return getHistory().filter((record) => record.slug === slug);
}

export function getRecord(id: string) {
  return getHistory().find((record) => record.id === id) ?? null;
}

export function getLatestRecord(slug: string) {
  return getHistoryBySlug(slug)[0] ?? null;
}

export function saveRecord(record: HistoryRecord) {
  const next = [record, ...getHistory().filter((item) => item.id !== record.id)].slice(0, 30);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function clearHistoryForSlug(slug: string) {
  const next = getHistory().filter((record) => record.slug !== slug);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}
