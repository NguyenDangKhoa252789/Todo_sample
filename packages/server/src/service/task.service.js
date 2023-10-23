import { database } from "../datasource/index.js";

export class taskService {
    static #instance;
    static getInstance() {
        if (!this.#instance) {
            this.#instance = new taskService();
        }
        return this.#instance;
    }
    async getAllTasks(req, res) {
        try {
            const collection = database.collection("tasks");
            const tasks = await collection.find().toArray();
            return res.send(tasks);
        } catch (error) {
            console.error(error);
        }
    }
    async getTaskByName(req, res) {
        try {
            const collection = database.collection("tasks");
            const name = req.params.name;
            // const userid = req.params.id;
            const task_info = await collection.findOne({
                //   user_ID: userid,
                name: name,
            });
            if (task_info) return res.send(task_info);
            else return res.status(400).send({ message: "Task not found" });
        } catch (error) {
            console.error(error);
        }
    }
    async getTaskByUser(req, res) {
        try {
            const collection = database.collection("tasks");
            const userid = req.params.id;
            const task_info = await collection
                .find({ user_ID: userid })
                .toArray();
            return res.send(task_info);
        } catch (error) {
            console.error(error);
        }
    }
    async createTasks(req, res) {
        try {
            const collection = database.collection("tasks");
            if (
                collection.find({ name: req.body.name, user_ID: req.params.id })
            )
                return res.status(400).send({ error: "Task already exists" });
            await collection.insertOne(req.body);
            return res.status(200).send({ message: "Task added successfully" });
        } catch (error) {
            console.error(error);
        }
    }

    async updateTask(req, res) {
        try {
            const name = req.params.name;
            const collection = database.collection("tasks");
            if (!collection.findOne(name)) {
                return res.status(400).send({ error: "Task does not exist" });
            }
            await collection.findOneAndUpdate(name, req.body);
            return res
                .status(200)
                .send({ message: "Task updated successfully" });
        } catch (error) {
            console.error(error);
        }
    }

    async deleteTask(req, res) {
        try {
            const name = req.params.name;
            const collection = database.collection("tasks");
            if (!collection.findOne(name)) {
                return res.status(400).send({ error: "Task does not exist" });
            }
            await collection.deleteOne({ name: name });
            return res
                .status(200)
                .send({ message: "Task deleted successfully" });
        } catch (error) {
            console.error(error);
        }
    }
}
export const taskServiceInstance = taskService.getInstance();
