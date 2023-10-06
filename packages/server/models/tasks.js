import mongoose from "mongoose";
import { Status } from "../interface/enum";
const TaskSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  UserID: { type: String, required: true },
  name: { type: String, required: true },
  created_date: { type: Date, required: true },
  started_date: { type: Date },
  finish_date: { type: Date },
  status: { type: Status },
  description: { type: String },
});
const task = mongoose.model("Task", TaskSchema);
export default task;
