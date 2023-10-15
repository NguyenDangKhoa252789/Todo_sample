import { database } from "../datasource/index.js";

//get all notes of the user
//----------------------------------------------------------------
const getAllNotes = async (req, res) => {
  try {
    const collection = database.collection("notes");
    const notes = await collection.find({ user_ID: req.params.id }).toArray();
    res.send(notes);
  } catch (error) {
    console.error(error);
  }
};
//get the notes by name
//----------------------------------------------------------------
const getNoteByName = async (req, res) => {
  try {
    const collection = database.collection("notes");
    const note = await collection.findOne({ name: req.params.name });
    res.send(note);
  } catch (error) {
    console.error(error);
  }
};

//create a note
//----------------------------------------------------------------
const createNote = async (req, res) => {
  try {
    const collection = database.collection("notes");
    const note = await collection.insertOne(req.body);
    res.send(note);
  } catch (error) {
    console.error(error);
  }
};

//update a note
//--------------------------------
const updateNote = async (req, res) => {
  try {
    const collection = database.collection("notes");
    const note = await collection.findOneAndUpdate(
      { name: req.params.name },
      req.body
    );
    res.send(note);
  } catch (error) {
    console.error(error);
  }
};

//delete a note
//----------------------------------------------------------------
const deleteNote = async (req, res) => {
  try {
    const collection = database.collection("notes");
    const note = await collection.deleteOne({ name: req.params.name });
    res.send(note);
  } catch (error) {
    console.error(error);
  }
};
//export default function

export { getAllNotes, getNoteByName, createNote, updateNote, deleteNote };
