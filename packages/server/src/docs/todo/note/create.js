const createNote = {
  post: {
    tags: ["Note"],
    description: "Create Note",
    operationId: "createNotes",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/note",
          },
        },
      },
    },
    responses: {
      201: {
        description: "Note created successfully",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
export default createNote;
