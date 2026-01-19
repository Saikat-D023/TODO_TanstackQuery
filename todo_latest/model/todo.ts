import mongoose from "mongoose"
import { boolean, maxLength } from "zod"

const TodoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            maxLength: [100, "Title cannot exceed 100"]
        } ,
        description: {
            type: String,
            trim: true,
            maxLength: [1000, "Description should not exceed 1000"]
        } ,
        completed: {
            type: boolean,
            default: false
        },
        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            default: "low"
        },
    },
    {
        timestamps: true
    }
)

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);