import { Router } from "express";
import { taskControllerInstance } from "../controller/task_controller.js";

const taskRoute = Router();

taskRoute.post("/", taskControllerInstance.createTask);

taskRoute.get("/", taskControllerInstance.getAllTasks);

taskRoute.get("/:name", taskControllerInstance.getTaskByName);

taskRoute.get("/user/:id", taskControllerInstance.getTaskByUser);

taskRoute.put("/", taskControllerInstance.updateTasks);

taskRoute.delete("/", taskControllerInstance.deleteTasks);

export { taskRoute };
