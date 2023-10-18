import Status from "../models/status.js";

const user = {
  components: {
    schemas: {
      // id model
      user: {
        type: "object", // data type
        properties: {
          user_ID: { type: "String", description: "Id of the user" },
          user_Name: { type: "String", description: "Name of the user" },
          pass_Word: { type: "String", description: "Password of the user" },
          name: { type: "String", description: "Name of the user" },
        }, //
      },
      task: {
        type: "object",
        properties: {
          user_ID: { type: "String", description: "User ID" },

          name: { type: "String", description: "Name of the task" },
          created_date: {
            type: "Date",
            description: "Date of the task created",
          },
          started_date: {
            type: "Date",
            description: "Date of the task started",
          },
          finish_date: { type: "Date", description: "Date of the task finish" },
          status: {
            type: "String",
            enum: Status,
            default: Status.IN_PROGRESS,
            description: "Status of the task",
          },
          description: {
            type: "String",
            description: "Description of the task",
          },
        },
      },
      note: {
        type: "object",
        properties: {
          UserID: { type: "String", description: "User ID " },
          name: { type: "String", description: "Name of the task" },
          create_date: {
            type: "Date",
            description: "Date of the task created",
          },
          content: {
            type: "String",
            description: " content of the note",
          },

          status: {
            type: "String",
            enum: Status,
            default: Status.IN_PROGRESS,
            description: " status of the note",
          },
        },
      },
      error: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
          internal_code: {
            type: "string",
          },
        },
      },
    },
  },
};
export default user;
