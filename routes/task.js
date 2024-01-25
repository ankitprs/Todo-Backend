import express from "express"
import taskController from "../controllers/task.controller.js"
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.post("/task", requireAuth, taskController.addTask)
router.get("/get_task", requireAuth, taskController.getTask)
router.post("/remove_task", requireAuth, taskController.removeTask)
router.post("/completed_task", requireAuth, taskController. completedTask)

router.post('/sub_task', requireAuth, taskController.addSubtask)

export default router;