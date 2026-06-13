export interface Stage {
  id: string;
  label: string;
  description: string;
  signs: string[];
  urgency: 'low' | 'moderate' | 'high' | 'emergency';
}

export interface ProtocolStep {
  title: string;
  description: string;
  duration?: string;
  icon?: string;
  checklist?: string[];
  warning?: string;
}

export interface ChecklistSection {
  label: string;
  freq: 'daily' | 'weekly' | 'monthly' | 'each_event';
  items: string[];
}

export interface DayPlan {
  day: number;
  label: string;
  tasks: string[];
  note?: string;
}

export interface Protocol {
  id: string;
  title: string;
  subtitle: string;
  stages: Stage[];
  triggers: string[];
  steps: ProtocolStep[];
  checklists: ChecklistSection[];
  weeklyPlan?: DayPlan[];
  vetAlert: string[];
  prevention: string[];
  myths: { myth: string; truth: string }[];
  faq: { q: string; a: string }[];
}

export interface Condition {
  id: string;
  name: string;
  emoji: string;
  gradient: string;
  description: string;
  prevalence: string;
  protocols: Protocol[];
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  gradient: string;
  description: string;
  conditions: Condition[];
}
