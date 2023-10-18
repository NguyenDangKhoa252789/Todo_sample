import { Router } from "express";
import * as controller from "../controller/index.js";
const userRoute = Router();
userRoute.get("/", controller.getAllUsers);
userRoute.get("/:id", controller.getUserIDs);
userRoute.post("/", controller.createUsers);
userRoute.put("/", controller.updateUsers);
userRoute.delete("/", controller.deleteUsers);
export default userRoute;
