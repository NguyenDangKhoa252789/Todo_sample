//import libary
import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const uri = process.env.URI;
let client;
async function main() {
  client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected correctly to server");
  } catch (err) {
    console.log(err.stack);
  }
}

async function startApp() {
  try {
    // Cấu hình middleware để sử dụng JSON
    app.use(express.json());
    main().catch(console.error);

    // Định nghĩa route để lấy tất cả người dùng
    app.get("/", async (req, res) => {
      try {
        const database = await client.db("todo");
        const collection = database.collection("users");
        const users = await collection.find().toArray();
        res.send(users);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Lắng nghe máy chủ trên cổng đã cấu hình
    app.listen(PORT, () => {
      console.log(`Máy chủ đang lắng nghe trên cổng ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the application:", error);
  }
}

// Khởi chạy ứng dụng
startApp();
