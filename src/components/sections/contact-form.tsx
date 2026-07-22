"use client";

import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  buildGmailComposeUrl,
  buildHireMailto,
} from "@/features/contact/build-mailto";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  TIMELINES,
  type BudgetRange,
  type ProjectType,
  type Timeline,
} from "@/features/contact/types";

type FormStatus = "idle" | "ready" | "error";

const selectClassName =
  "h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const projectType = String(
      formData.get("projectType") ?? "",
    ) as ProjectType;
    const budget = String(formData.get("budget") ?? "") as BudgetRange;
    const timeline = String(formData.get("timeline") ?? "") as Timeline;
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !projectType || !budget || !timeline || !message) {
      setStatus("error");
      setError("Please fill in all required fields.");
      return;
    }

    if (
      !PROJECT_TYPES.includes(projectType) ||
      !BUDGET_RANGES.includes(budget) ||
      !TIMELINES.includes(timeline)
    ) {
      setStatus("error");
      setError("Please choose a valid project type, budget, and timeline.");
      return;
    }

    const inquiry = {
      name,
      email,
      company: company || undefined,
      projectType,
      budget,
      timeline,
      message,
    };

    // Prefer Gmail compose so the request lands in your Gmail inbox flow.
    // mailto stays as a fallback for users without Gmail signed in.
    const gmailUrl = buildGmailComposeUrl(inquiry);
    setStatus("ready");

    const opened = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.href = buildHireMailto(inquiry);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your name *</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder="Alex Rivera"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="alex@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company or client</Label>
        <Input
          id="company"
          name="company"
          autoComplete="organization"
          placeholder="Optional — startup, agency, or personal project"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="projectType">What do you need? *</Label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className={selectClassName}
          >
            <option value="" disabled>
              Select project type
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Budget range *</Label>
          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className={selectClassName}
          >
            <option value="" disabled>
              Select budget
            </option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline">When do you want to start? *</Label>
        <select
          id="timeline"
          name="timeline"
          required
          defaultValue=""
          className={selectClassName}
        >
          <option value="" disabled>
            Select timeline
          </option>
          {TIMELINES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project brief *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell me what you’re building, the goal, and how I can help as a freelance developer."
        />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-primary">
          {error}
        </p>
      ) : null}

      {status === "ready" ? (
        <p className="text-sm text-muted-foreground">
          Opening Gmail with your hire request… Review it, then click Send.
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Open in Gmail
      </Button>
    </form>
  );
}
