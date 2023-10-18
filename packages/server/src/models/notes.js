import mongoose from "mongoose";
import Status from "./status.js";
import { ObjectId } from "mongodb";
const NoteSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
  },
  UserID: { type: String, required: true },
  name: { type: String },
  create_date: { type: Date },
  content: {
    type: String,
  },
  status: { type: String, enum: Status, default: Status.IN_PROGRESS },
});
const note = mongoose.model("Note", NoteSchema);
export default note;
