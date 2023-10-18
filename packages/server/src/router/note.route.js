import Router from "express";
import * as controller from "../controller/index.js";
const noteRoute = Router();

noteRoute.get("/", controller.getAllNotes);
noteRoute.get("/:id", controller.getAllNotesOfUser);
noteRoute.get("/:id/:name", controller.getNoteByName);
noteRoute.post("/:id", controller.createNote);
noteRoute.put("/:id", controller.updateNote);
noteRoute.delete("/:id", controller.deleteNote);
export default noteRoute;
