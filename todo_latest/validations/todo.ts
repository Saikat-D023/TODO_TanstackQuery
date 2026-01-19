import z from "zod";

export const createTodoSchema = z.object({
    title: z.string().min(1, "Title is required").max(100, "Title cannot exceed 100 characters").trim(),
    description: z.string().max(1000, "Description should not exceed 1000 characters").optional(),
    priority: z.enum(["low", "medium", "high"]).default("low"),
 });