import { taskServiceInstance } from "../service/task.service.js";

export class taskController {
    static #instance;
    static getInstance() {
        if (!this.#instance) {
            this.#instance = new taskController();
        }
        return this.#instance;
    }
    async createTask(req, res) {
        return await taskServiceInstance.createTask(req, res);
    }
    async getAllTasks(req, res) {
        return await taskServiceInstance.getAllTasks(req, res);
    }
    async getTaskByName(req, res) {
        return await taskServiceInstance.getTaskByName(req, res);
    }
    async getTaskByUser(req, res) {
        return await taskServiceInstance.getTaskByUser(req, res);
    }
    async updateTasks(req, res) {
        return await taskServiceInstance.updateTasks(req, res);
    }
    async deleteTasks(req, res) {
        return await taskServiceInstance.deleteTasks(req, res);
    }
}
export const taskControllerInstance = taskController.getInstance();
