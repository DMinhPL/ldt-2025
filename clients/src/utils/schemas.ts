import { z } from "astro:schema";

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  companyName: z.string().min(1, 'Company Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(1, 'Phone number is required'),
  projectDetails: z.string().optional(),
  budget: z.string().min(1, 'Budget is required'),
  source: z.string().min(1, 'Source is required'),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;

export {
  contactFormSchema,
}