import mongoose from "mongoose";
import { Status } from "../interface/enum";
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
  status: { type: Status },
});
const note = mongoose.model("Note", NoteSchema);
export default note;
