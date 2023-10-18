const getNote = {
  get: {
    tags: ["Note"],
    description: "Get Note by name",
    operationId: "getNote",
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
        description: "Note was obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/note",
            },
          },
        },
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
export default getNote;
