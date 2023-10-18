const deleteNote = {
  delete: {
    tags: ["Note"],
    description: "Delete Note by name",
    operationId: "deleteNote",
    parameters: [
      {
        name: "name",
        in: "path",
        required: true,
        schema: {
          type: "string",
        },
        description: "Note name",
      },
    ],
    responses: {
      200: {
        description: "Note was deleted",
      },
      404: {
        description: "Note was not found",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/error",
              $examples: [
                {
                  code: 404,
                  message: "Note not found",
                },
              ],
            },
          },
        },
      },
    },
  },
};
export default deleteNote;
