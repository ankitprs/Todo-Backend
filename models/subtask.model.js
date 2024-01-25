import mongoose from "mongoose";

const subTaskInstance = mongoose.Schema({
    task_id: {tye: Number, required: true},
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
    completed: { type: Boolean, required: true }
}, { timestamps: true });


const Status = Object.freeze({
    TODO: "todo",
    IN_PROGRESS: "process",
    DONE: "done"
})

const taskModel = mongoose.model("Task", taskInstance);
export default taskModel;