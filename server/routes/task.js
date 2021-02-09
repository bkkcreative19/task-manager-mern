import express from "express";
import {
  addTask,
  getTasks,
  deleteTask,
  updateTasks,
} from "../controllers/task.js";
import { aunthenticate } from "../middlewares/auth.js";

const router = express.Router();

router.get("/lists/:listId/tasks", aunthenticate, getTasks);
router.post("/lists/:listId/tasks", aunthenticate, addTask);
router.patch("/lists/:listId/tasks/:taskId", aunthenticate, updateTasks);
router.delete("/lists/:listId/tasks/:taskId", aunthenticate, deleteTask);

export default router;
