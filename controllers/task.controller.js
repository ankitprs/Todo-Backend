import taskModel from "../models/task.model.js";
// import userModel from "../models/userModel.js";

import dotenv from "dotenv";
dotenv.config();

class TaskController {

    addTask = async (req, res) => {
        const { title, description } = req.body;
        const userId = req.user.id;
        // const user = await userModel.find({ _id: userId });
        const newTask = new taskModel({ title, description, completed: false, userId })
        newTask.save()
            .then(() => {
                return (res.status(200).json({ message: "Task added successfully" }))
            })
            .catch((error) => {
                return (
                    res.status(500).json({ message: error.message })
                )
            })
    }
    removeTask = (req, res) => {
        const { id } = req.body;
        console.log("id: ", id);
        taskModel.findByIdAndDelete({ _id: id })
            .then(() => res.status(200).json({ message: "Task deleted successfully" }))
            .catch((error) => res.status(501).json({ message: error.message }))
    }

    getTask = (req, res) => {
        taskModel.find({ userId: req.user.id })
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(501).json({ message: error.message }))
    }

    completedTask = async (req, res) => {
        const { id, isCompleted } = req.body;
        const updateVal = {
            completed: isCompleted
        }
        taskModel.findByIdAndUpdate({ _id: id }, updateVal)
            .then(() => res.status(200).json({ message: "Task updated successfully" }))
            .catch((error) => res.status(501).json({ message: error.message }))
    }
    addSubtask = async (req, res) => {
        const { task_id } = req.body;
        const userId = req.user.id;
        // const user = await userModel.find({ _id: userId });
        const newTask = new taskModel({ title, description, completed: false, userId })
        newTask.save()
            .then(() => {
                return (res.status(200).json({ message: "Task added successfully" }))
            })
            .catch((error) => {
                return (
                    res.status(500).json({ message: error.message })
                )
            })
    };
}

const taskController = new TaskController()
export default taskController