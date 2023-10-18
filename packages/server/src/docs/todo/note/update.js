const updateTask = {
  put: {
    tags: ["Note"],
    description: "Update Note by name",
    operationId: "updateNote",
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
      200: {
        description: "Note was updated",
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
export default updateTask;
