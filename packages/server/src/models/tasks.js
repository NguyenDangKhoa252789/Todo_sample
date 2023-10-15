import mongoose from "mongoose";
import { Status } from "./status.js";
import { ObjectId } from "mongodb";
const TaskSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
  },
  user_ID: { type: String, required: true },
  //id ?

  name: { type: String, required: true },
  created_date: { type: Date, required: true },
  started_date: { type: Date },
  finish_date: { type: Date },
  status: { type: Status },
  description: { type: String },
});
const task = mongoose.model("Task", TaskSchema);
export default task;
