const deletetask = {
  delete: {
    tags: ["Task"],
    description: "Delete task by name",
    operationId: "deleteTask",
    parameters: [
      {
        name: "name",
        in: "path",
        required: true,
        schema: {
          type: "string",
        },
        description: "task name",
      },
    ],
    responses: {
      200: {
        description: "task was deleted",
      },
      404: {
        description: "task was not found",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/error",
              $examples: [
                {
                  code: 404,
                  message: "task not found",
                },
              ],
            },
          },
        },
      },
    },
  },
};
export default deletetask;
