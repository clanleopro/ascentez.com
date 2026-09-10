import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { submitInquiryOnServer } from "@/server/inquiries.server";

const InquirySchema = z.object({
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

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InquirySchema.parse(input))
  .handler(async ({ data }) => submitInquiryOnServer(data));
