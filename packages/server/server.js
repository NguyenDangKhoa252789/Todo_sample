//import libary
import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./src/datasource/index.js";

// -----------------------------------------------
dotenv.config();
const PORT = process.env.PORT ?? 5999;

// -----------------------------------------------
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const conn = await dbConnect();
    const database = conn.db("todo");
    const collection = database.collection("users");
    const users = await collection.find().toArray();
    res.send(users);
  } catch (error) {
    console.error(error);
  }
});

// -----------------------------------------------
app.listen(PORT, () => {
  console.log(
    `⚡️[Todo_Sample]: Server is running at http://localhost:${PORT}`
  );
});
