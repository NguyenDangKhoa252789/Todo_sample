const getAllNotesByUser = {
  get: {
    tags: ["Note"],
    description: "Get all notes by user",
    operationId: "getAllNotesByUser",
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
  },
  responses: {
    200: {
      description: "Notes retrieved successfully",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
              $ref: "#/components/schemas/note",
            },
          },
        },
      },
    },
    500: {
      description: "Server error",
    },
    404: {
      description: "User not found",
    },
  },
};
export default getAllNotesByUser; // returns
