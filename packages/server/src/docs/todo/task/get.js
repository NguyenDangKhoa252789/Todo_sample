const getTask = {
  get: {
    tags: ["Task"],
    description: "Get Task by name",
    operationId: "getTask",
    parameters: [
      {
        name: "name",
        in: "path",
        required: true,
        schema: {
          type: "string",
        },
        description: "Task name",
      },
    ],
    responses: {
      200: {
        description: "Task was obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/task",
            },
          },
        },
      },
      404: {
        description: "Task was not found",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/error",
              $examples: [
                {
                  code: 404,
                  message: "Task not found",
                },
              ],
            },
          },
        },
      },
    },
  },
};
export default getTask;
