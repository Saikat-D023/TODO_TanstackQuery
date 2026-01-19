"use server";

import { createTodoSchema } from "../validations/todo";
import connectToDB from "@/lib/db";
import Todo from "../model/todo";
import { revalidatePath } from "next/cache";
import { success, TimePrecision } from "zod";

export async function createTodo(data: unknown) {
    try {
        const validateDate = createTodoSchema.parse(data);
        await connectToDB();
        const todo = await Todo.create(validateDate);
        revalidatePath("/");

        return {
            success: true,
            data: JSON.parse(JSON.stringify(todo)),
        }
    } catch (error) {
        console.error("Error creating todo:", error);
        return {
            success: false,
            error: "Failed to create todo",
        };
    }
}