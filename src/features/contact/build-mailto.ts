import type { HireInquiry } from "@/features/contact/types";
import { getContactEmail } from "@/features/contact/config";

export function buildHireEmailContent(inquiry: HireInquiry) {
  const subject = `Freelance project inquiry from ${inquiry.name}`;
  const body = [
    "Hi Copcrush,",
    "",
    "I would like to hire you as a freelance full-stack developer.",
    "",
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Company / client: ${inquiry.company || "—"}`,
    `Project type: ${inquiry.projectType}`,
    `Budget: ${inquiry.budget}`,
    `Timeline: ${inquiry.timeline}`,
    "",
    "Project brief:",
    inquiry.message,
    "",
    "Looking forward to hearing from you.",
  ].join("\n");

  return { subject, body, to: getContactEmail() };
}

/** Opens Gmail compose with the hire request ready to send. */
export function buildGmailComposeUrl(inquiry: HireInquiry) {
  const { subject, body, to } = buildHireEmailContent(inquiry);
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    tf: "1",
    to,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function buildHireMailto(inquiry: HireInquiry) {
  const { subject, body, to } = buildHireEmailContent(inquiry);
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
