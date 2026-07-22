export const PROJECT_TYPES = [
  "New website",
  "Web app / SaaS",
  "Landing page",
  "API or backend work",
  "Bug fixes / improvements",
  "Ongoing freelance support",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,000",
  "$7,000+",
  "Let’s discuss",
] as const;

export const TIMELINES = [
  "ASAP",
  "Within 2 weeks",
  "1–2 months",
  "Flexible",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];
export type BudgetRange = (typeof BUDGET_RANGES)[number];
export type Timeline = (typeof TIMELINES)[number];

export type HireInquiry = {
  name: string;
  email: string;
  company?: string;
  projectType: ProjectType;
  budget: BudgetRange;
  timeline: Timeline;
  message: string;
};
