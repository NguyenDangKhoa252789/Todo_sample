import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  _id: { type: ObjectId },
  user_ID: { type: String, required: true },
  user_Name: { type: String, required: true },
  pass_Word: { type: String, required: true },
  name: { type: String, required: true },
});
const user = mongoose.model("user", UserSchema);

export { user, UserSchema };
