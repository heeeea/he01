import testersData from "@/data/testers.json";
import type { TesterConfig } from "./types";

export const testers = testersData as TesterConfig[];

export function getAllTesters() {
  return testers;
}

export function getTesterBySlug(slug: string) {
  return testers.find((tester) => tester.slug === slug) ?? null;
}

export function getTesterSlugs() {
  return testers.map((tester) => tester.slug);
}
