import express, { json } from "express";
import * as controller from "../controller/index.js";
const route = express.Router();
// User routes
//----------------------------------------------------------------
route.get("/user", controller.getAllUsers);
route.get("/user/:id", controller.getUserIDs);
route.post("/user", controller.createUsers);
route.put("/user", controller.updateUsers);
route.delete("/user", controller.deleteUsers);

//Tasks Route
//----------------------------------------------------------------

route.get("/task", controller.getAllTasks);
route.get("/task/:name", controller.getTaskByName);
route.post("/task", controller.createTasks);
route.put("/task", controller.updateTasks);
route.delete("/task", controller.deleteTasks);

//Notes Route
//----------------------------------------------------------------
route.get("/note", controller.getAllNotes);
route.get("/note/:name", controller.getNoteByName);
route.post("/note", controller.createNote);
route.put("/note", controller.updateNote);
route.delete("/note", controller.deleteNote);
export default route;
