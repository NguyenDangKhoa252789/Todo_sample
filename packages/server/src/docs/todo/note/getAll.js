const getAllNotes = {
  get: {
    tags: ["Note"],
    description: "Get all Note",
    operationId: "getAllNotes",
    parameters: [],
    responses: {
      200: {
        description: "Notes were obtained",
        content: {
          "application/json": {
            schema: {
              $type: "array",
              $ref: "#/components/schemas/note",
            },
          },
        },
      },
    },
  },
};
export default getAllNotes;
