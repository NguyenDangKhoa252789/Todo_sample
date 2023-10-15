//import libary
import express from "express";
import dotenv from "dotenv";
import route from "./src/router/route.js";
import cors from "cors";
import { database } from "./src/datasource/index.js";
import swaggerSpec from "./src/router/swagger.js";
import SwaggerUI from "swagger-ui-express";
// -----------------------------------------------
dotenv.config();
const PORT = process.env.PORT ?? 5999;

// -----------------------------------------------
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", route);
//use swagger
app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerSpec));

// -----------------------------------------------
app.listen(PORT, () => {
  console.log(
    `⚡️[Todo_Sample]: Server is running at http://localhost:${PORT}`
  );
});

//disconnect database ....
process.on("SIGINT", function () {
  database.close(function () {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});
