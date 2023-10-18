import { database } from "../datasource/index.js";

//get all task in database

const getAllTasks = async (req, res) => {
  try {
    const collection = database.collection("tasks");
    const tasks = await collection.find().toArray();
    res.send(tasks);
  } catch (error) {
    console.error(error);
  }
};

//Get all tasks of the user
const getAllTasksOfUser = async (req, res) => {
  try {
    const collection = database.collection("tasks");
    const tasks = await collection.find({ user_ID: req.params.id }).toArray();
    res.send(tasks);
  } catch (error) {
    console.error(error);
  }
};

//get task by name
const getTaskByName = async (req, res) => {
  try {
    const collection = database.collection("tasks");
    const name = req.params.name;
    const userid = req.params.id;
    const task_info = await collection.findOne({
      user_ID: userid,
      name: name,
    });
    if (task_info) return res.send(task_info);
    else res.status(400).send({ message: "Task not found" });
  } catch (error) {
    console.error(error);
  }
};

//create a new task
const createTasks = async (req, res) => {
  try {
    const collection = database.collection("tasks");
    if (collection.find({ name: req.body.name, user_ID: req.params.id }))
      return res.status(400).send({ error: "Task already exists" });
    await collection.insertOne(req.body);
    res.status(200).send({ message: "Task added successfully" });
  } catch (error) {
    console.error(error);
  }
};

//Update task
const updateTasks = async (req, res) => {
  try {
    const collection = database.collection("tasks");
    if (collection.find({ name: req.body.name, user_ID: req.params.id }))
      return res.status(400).send({ error: "Task already exists" });
    await collection.insertOne(req.body);
    res.status(200).send({ message: "Task added successfully" });
  } catch (error) {
    console.error(error);
  }
};

//delete a task
const deleteTasks = async (req, res) => {
  try {
    const collection = database.collection("tasks");
    if (!collection.findOne(req.params.name, req.params.id)) {
      return res.status(400).send({ error: "Task does not exist" });
    }

    await collection.deleteOne({ name: req.params.name });
    res.status.send({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(error);
  }
};
export {
  getAllTasks,
  getAllTasksOfUser,
  createTasks,
  updateTasks,
  getTaskByName,
  deleteTasks,
};
