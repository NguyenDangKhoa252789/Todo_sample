import { userRoute } from "./user.route.js";
import { taskRoute } from "./task.route.js";
import noteRoute from "./note.route.js";
export const route = (app) => {
    app.use("/user", userRoute);
    app.use("/task", taskRoute);
};
