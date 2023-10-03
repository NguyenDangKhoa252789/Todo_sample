import Express from "express";

//import colors from "colors";
import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";

// Define the MongoDB Atlas connection URL

const uri =
  "mongodb+srv://todoappuser:toappsample@cluster0.fuvtpwf.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const app = Express();
const PORT = 8080;
app.use(Express.json());
app.get("/", (req, res) => {
  return res.status(200).json({ message: "fetched" });
});

app.listen(PORT, () => {
  console.log(`server start at ${PORT}`);
});
