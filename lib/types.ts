export type FieldType = "text" | "textarea" | "select" | "radio" | "checkbox" | "number" | "range";

export type FormOption = {
  label: string;
  value: string;
  hint?: string;
};

export type FormField = {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  helpText?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  options?: FormOption[];
};

export type ScoreRuleKind =
  | "containsAny"
  | "keywordHitEach"
  | "missingAny"
  | "minLength"
  | "maxLength"
  | "equals"
  | "notEquals"
  | "numberRange"
  | "booleanTrue"
  | "booleanFalse";

export type ScoreRule = {
  id: string;
  field: string;
  kind: ScoreRuleKind;
  keywords?: string[];
  value?: string | number | boolean;
  min?: number;
  max?: number;
  maxScore?: number;
  score: number;
  hitLabel?: string;
  problem?: string;
  suggestion?: string;
  recommendation?: string;
};

export type RiskLevel = {
  label: string;
  min: number;
  max: number;
  tone: "danger" | "warning" | "stable" | "excellent";
  headline: string;
  description: string;
};

export type RecommendationBank = {
  low: string;
  medium: string;
  high: string;
};

export type ReplyScripts = {
  gentle: string;
  quote: string;
  reject: string;
  deposit: string;
  revisionBoundary: string;
};

export type LockedTemplate = {
  title: string;
  preview: string[];
  buttonText: string;
};

export type TesterConfig = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  icon: string;
  accent: string;
  summary: string;
  promise: string;
  fields: FormField[];
  scoring: {
    baseScore: number;
    rules: ScoreRule[];
    levels: RiskLevel[];
  };
  defaults: {
    problems: string[];
    suggestions: string[];
  };
  recommendationBank: RecommendationBank;
  replyScripts?: ReplyScripts;
  lockedTemplate?: LockedTemplate;
};

export type FormValues = Record<string, string | number | boolean>;

export type ScoreResult = {
  score: number;
  level: RiskLevel;
  matchedRules: Array<ScoreRule & { actualScore?: number; hits?: string[] }>;
  riskPoints: string[];
  problems: string[];
  suggestions: string[];
  recommendation: string;
  shareTitle: string;
  shareSubtitle: string;
};

export type HistoryRecord = {
  id: string;
  slug: string;
  testerTitle: string;
  createdAt: string;
  input: FormValues;
  result: ScoreResult;
};
