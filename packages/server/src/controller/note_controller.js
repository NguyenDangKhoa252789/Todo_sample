import { database } from "../datasource";

//get all notes of the user

const getAllNotes = async (req, res) => {
  try {
    const collection = database.collection("notes");
    const notes = await collection.find({ user_ID: req.params.id }).toArray();
    res.send(notes);
  } catch (error) {
    console.error(error);
  }
};
