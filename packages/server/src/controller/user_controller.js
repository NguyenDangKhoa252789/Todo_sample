import { database } from "../datasource/index.js";

//Get all users --------------------------------
const getAllUsers = async (req, res) => {
  try {
    const collection = database.collection("users");
    const users = await collection.find().toArray();
    res.send(users);
  } catch (error) {
    console.error(error);
  }
};
//Get users by id --------------------------------
const getUserIDs = async (req, res) => {
  try {
    const collection = database.collection("users");
    const id = req.params.id;
    const user_info = await collection.findOne({
      user_ID: id,
    });
    if (user_info) res.status.send(user_info);
    else res.status(400).send({ message: "User not found" });
  } catch (error) {
    console.error(error);
  }
};
//Create user --------------------------------
const createUsers = async (req, res) => {
  try {
    const collection = database.collection("users");
    if (collection.find({ user_ID: req.body.user_ID }))
      return res.status(400).send({ error: "User already exists" });
    await collection.insertOne(req.body);
    res.status(200).send({ message: "User added successfully" });
  } catch (error) {
    console.error(error);
  }
};
//Update user --------------------------------
const updateUsers = async (req, res) => {
  try {
    const collection = database.collection("users");
    await collection.updateOne({ user_ID: req.params.id }, { $set: req.body });
    res.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
  }
};
//Delete a user --------------------------------
const deleteUsers = async (req, res) => {
  try {
    const collection = database.collection("users");
    if (!collection.findOne(req.params.id)) {
      return res.status(400).send({ error: "User does not exist" });
    }

    await collection.deleteOne({ user_ID: req.params.id });
    res.status.send({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
  }
};

export { getAllUsers, createUsers, updateUsers, deleteUsers, getUserIDs };
