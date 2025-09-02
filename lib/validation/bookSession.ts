import { z } from "zod";

export const bookSessionValidationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address").min(1, "Email is required"),
  phoneNumber: z.string().nullable(),
  dateOfBirth: z.iso.date().nullable(),
  heightCm: z.number().min(1).nullable(),
  weightKg: z.number().min(1).nullable(),
  trainingDaysPerWeek: z.number().min(1).nullable(),
  trainingSessionLengthMinutes: z.number().min(1).nullable(),
  injuriesOrLimitations: z.enum(["yes", "no"]).nullable(),
  injuriesDescription: z.string().nullable(),
  foodIssues: z.enum(["yes", "no"]).nullable(),
  approximateDailyCalorieIntake: z.number().min(1).nullable(),
  supplements: z.enum(["yes", "no"]).nullable(),
  supplementsDescription: z.string().nullable(),
  shortTermGoal: z.string().nullable(),
  longTermGoal: z.string().nullable(),
});

export type BookSessionPayload = z.infer<typeof bookSessionValidationSchema>;
