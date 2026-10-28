export type ProjectStatus = "Concept" | "Prototype" | "MVP" | "Live";

export interface Project {
  slug: string;
  title: string;
  shortLabel: string;
  category: string;
  year: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  solution: string;
  aiIntegration: string;
  features: string[];
  tools: string[];
  image?: string;
  demoUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "ai-document-intelligence",
    title: "AI Document Intelligence",
    shortLabel: "PDF → DATA",
    category: "AI · Document Processing",
    year: "2026",
    status: "Concept",
    summary: "A concept for extracting structured information from PDF documents and preparing it for review and export.",
    problem: "Manually reading documents and copying fields into spreadsheets can be repetitive and may introduce data-entry errors.",
    solution: "A document workflow that accepts a sample PDF, extracts selected fields with an AI model, validates required values, and lets the user review results before export.",
    aiIntegration: "A language or multimodal model interprets document content and returns structured fields. Deterministic validation rules check required fields and data formats; uncertain results are flagged for human review.",
    features: [
      "Upload a sample document",
      "Extract and summarize key fields",
      "Flag missing or uncertain values",
      "Review and correct extracted data",
      "Export validated data to CSV or Excel"
    ],
    tools: ["React", "TypeScript", "AI API", "Workflow"],
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    shortLabel: "REQUEST → TASK",
    category: "AI · Business Automation",
    year: "2026",
    status: "Concept",
    summary: "A prototype concept for turning incoming requests into categorized, prioritized work items.",
    problem: "Teams may receive requests through multiple channels, making classification, assignment, and follow-up difficult to manage consistently.",
    solution: "A workflow that analyzes request text, proposes a category and priority, then prepares a task for a user to review before assignment.",
    aiIntegration: "An AI model classifies free-text requests and explains its suggested category. Rules enforce required fields and escalation criteria; users approve actions before tasks are created.",
    features: [
      "Submit a sample request",
      "Suggest category and priority",
      "Recommend a responsible team",
      "Review and approve task details",
      "Track status and processing history"
    ],
    tools: ["React", "TypeScript", "LLM", "Automation"],
  }
];