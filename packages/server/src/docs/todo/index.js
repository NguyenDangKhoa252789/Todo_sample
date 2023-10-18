//import User
import create from "./user/create.js";
import getAllusers from "./user/getAllUser.js";
import getUser from "./user/getUser.js";
import updateUser from "./user/updateUser.js";
import deleteUser from "./user/deleteUser.js";
//Import tasks
import createTask from "./task/create.js";
import getAllTasks from "./task/getAll.js";
import getTask from "./task/get.js";
import updateTask from "./task/update.js";
import deleteTask from "./task/delete.js";
import getAllTaskByUser from "./task/getAllByUser.js";
// import notes
import createNote from "./note/create.js";
import deleteNote from "./note/delete.js";
import updateNote from "./note/update.js";
import getAllNotes from "./note/getAll.js";
import getNoteById from "./note/get.js";
import getAllNoteByUser from "./note/getAllByUser.js";
// import * as user from "./user/index.js";
const path = {
  paths: {
    "/user": {
      ...create,
      ...getAllusers,
    },
    "/user/:id": {
      ...getUser,
      ...updateUser,
      ...deleteUser,
    },
    "/task": {
      ...createTask,
      ...getAllTasks,
    },
    "/task/:name": {
      ...getTask,
      ...updateTask,
      ...deleteTask,
    },
    "/task/:id": {
      ...getAllTaskByUser,
    },
    "/note": {
      ...createNote,
      ...getAllNotes,
    },
    "/note/:name": {
      ...getNoteById,
      ...updateNote,
      ...deleteNote,
    },
    "/note/:id": {
      ...getAllNoteByUser,
    },
  },
};

export default path;
