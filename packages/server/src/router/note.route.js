import Router from "express";
import * as controller from "../controller/index.js";
const noteRoute = Router();

noteRoute.get("/", controller.noteControllerInstance.getAllNotes);
noteRoute.get("/:name", controller.noteControllerInstance.getNoteByName);
noteRoute.get("/user/:id", controller.noteControllerInstance.getAllNotesOfUser);
noteRoute.get("/:id/:name", controller.noteControllerInstance.getNoteByUser);
noteRoute.post("/", controller.noteControllerInstance.createNotes);
noteRoute.put("/:name", controller.noteControllerInstance.updateNote);
noteRoute.delete("/:name", controller.noteControllerInstance.deleteNote);
export default noteRoute;
