import type { FormValues, RiskLevel, ScoreResult, ScoreRule, TesterConfig } from "./types";

type AppliedRule = ScoreRule & {
  actualScore: number;
  hits?: string[];
};

const normalize = (value: unknown) => String(value ?? "").trim().toLowerCase();

const asNumber = (value: unknown) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const dedupe = (items: string[]) => Array.from(new Set(items.filter(Boolean)));

function ruleMatches(rule: ScoreRule, values: FormValues) {
  const rawValue = values[rule.field];
  const text = normalize(rawValue);

  switch (rule.kind) {
    case "containsAny":
      return Boolean(rule.keywords?.some((keyword) => text.includes(keyword.toLowerCase())));
    case "keywordHitEach":
      return Boolean(rule.keywords?.some((keyword) => text.includes(keyword.toLowerCase())));
    case "missingAny":
      return Boolean(rule.keywords?.every((keyword) => !text.includes(keyword.toLowerCase())));
    case "minLength":
      return text.length < Number(rule.min ?? 0);
    case "maxLength":
      return text.length > Number(rule.max ?? Number.POSITIVE_INFINITY);
    case "equals":
      return String(rawValue) === String(rule.value);
    case "notEquals":
      return String(rawValue) !== String(rule.value);
    case "numberRange": {
      const value = asNumber(rawValue);
      const min = Number(rule.min ?? Number.NEGATIVE_INFINITY);
      const max = Number(rule.max ?? Number.POSITIVE_INFINITY);
      return value >= min && value <= max;
    }
    case "booleanTrue":
      return rawValue === true || rawValue === "true";
    case "booleanFalse":
      return rawValue === false || rawValue === "false" || rawValue === "" || rawValue === undefined;
    default:
      return false;
  }
}

function applyRule(rule: ScoreRule, values: FormValues): AppliedRule | null {
  const rawValue = values[rule.field];
  const text = normalize(rawValue);

  if (rule.kind === "keywordHitEach") {
    const hits = (rule.keywords ?? []).filter((keyword) => text.includes(keyword.toLowerCase()));
    const actualScore = Math.min(hits.length * rule.score, rule.maxScore ?? Number.POSITIVE_INFINITY);
    return hits.length
      ? ({
          ...rule,
          actualScore,
          hits
        } satisfies AppliedRule)
      : null;
  }

  return ruleMatches(rule, values)
    ? ({
        ...rule,
        actualScore: rule.score,
        hits: rule.hitLabel ? [rule.hitLabel] : undefined
      } satisfies AppliedRule)
    : null;
}

function getLevel(levels: RiskLevel[], score: number) {
  return (
    levels.find((level) => score >= level.min && score <= level.max) ??
    levels[levels.length - 1]
  );
}

function getRecommendation(
  tester: TesterConfig,
  score: number,
  matchedRules: AppliedRule[]
) {
  const ruleRecommendations = matchedRules
    .filter((rule) => (rule.actualScore ?? rule.score) > 0)
    .map((rule) => rule.recommendation)
    .filter(Boolean)
    .slice(0, 3);

  const bank =
    score >= 61
      ? tester.recommendationBank.high
      : score >= 31
        ? tester.recommendationBank.medium
        : tester.recommendationBank.low;

  return [bank, ...ruleRecommendations].filter(Boolean).join("\n\n");
}

export function calculateScore(tester: TesterConfig, values: FormValues): ScoreResult {
  const matchedRules = tester.scoring.rules
    .map((rule) => applyRule(rule, values))
    .filter((rule): rule is AppliedRule => Boolean(rule));
  const rawScore =
    tester.scoring.baseScore + matchedRules.reduce((sum, rule) => sum + (rule.actualScore ?? rule.score), 0);
  const score = Math.max(0, Math.min(100, Math.round(rawScore)));
  const level = getLevel(tester.scoring.levels, score);
  const riskRules = matchedRules.filter((rule) => (rule.actualScore ?? rule.score) > 0);
  const riskPoints = dedupe(
    riskRules.flatMap((rule) => {
      if (rule.kind === "keywordHitEach") {
        return (rule.hits ?? []).map((hit) => `客户原话命中「${hit}」`);
      }
      return [rule.hitLabel ?? rule.problem ?? ""];
    })
  );

  const problems = dedupe([
    ...riskRules.map((rule) => rule.problem ?? ""),
    ...tester.defaults.problems
  ]).slice(0, 5);

  const suggestions = dedupe([
    ...riskRules.map((rule) => rule.suggestion ?? ""),
    ...tester.defaults.suggestions
  ]).slice(0, 5);

  return {
    score,
    level,
    matchedRules,
    riskPoints,
    problems,
    suggestions,
    recommendation: getRecommendation(tester, score, matchedRules),
    shareTitle: `${tester.shortTitle}：${score} 分`,
    shareSubtitle: level.headline
  };
}

export function resultToText(tester: TesterConfig, result: ScoreResult) {
  return [
    `【${tester.title}】`,
    `总分：${result.score}`,
    `等级：${result.level.label}`,
    `结论：${result.level.headline}`,
    "",
    "主要问题：",
    ...result.problems.map((item, index) => `${index + 1}. ${item}`),
    "",
    "修改建议：",
    ...result.suggestions.map((item, index) => `${index + 1}. ${item}`),
    "",
    "推荐回复/优化版本：",
    result.recommendation
  ].join("\n");
}
