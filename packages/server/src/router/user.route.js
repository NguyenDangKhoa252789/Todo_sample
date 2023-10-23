import { Router } from "express";
import { userControllerInstance } from "../controller/user_controller.js";
const userRoute = Router();
userRoute.get("/", userControllerInstance.getAllUsers);
userRoute.get("/:id", userControllerInstance.getUserIDs);
userRoute.post("/", userControllerInstance.createUser);
userRoute.put("/", userControllerInstance.updateUsers);
userRoute.delete("/", userControllerInstance.deleteUsers);
export { userRoute };
