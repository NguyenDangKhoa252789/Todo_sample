import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.URI;

async function dbConnect() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const conn = await client.connect();
    console.log("Connected correctly to server");
    return conn;
  } catch (err) {
    console.log(err.stack);
  }
}

export { dbConnect };
