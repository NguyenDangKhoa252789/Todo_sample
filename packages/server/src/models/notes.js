import mongoose from "mongoose";
import { Status } from "../interface/enum";
const NoteSchema = new mongoose.Schema({
  id: {
    type: Number,
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
