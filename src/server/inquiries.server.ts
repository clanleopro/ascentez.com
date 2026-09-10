import { z } from "zod";

export const InquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().default(""),
  type: z.string().trim().max(80),
  location: z.string().trim().max(200).optional().default(""),
  load: z.string().trim().max(200).optional().default(""),
  schedule: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export type InquiryInput = z.infer<typeof InquirySchema>;

export async function submitInquiryOnServer(data: InquiryInput) {
  // For now, log the inquiry. Wire to email/DB once Lovable Cloud is enabled.
  console.log("[Ascentez Inquiry]", JSON.stringify(data));
  return { ok: true, receivedAt: new Date().toISOString() };
}
