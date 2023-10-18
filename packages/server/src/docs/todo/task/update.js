const updateTask = {
  put: {
    tags: ["Task"],
    description: "Update Task by name",
    operationId: "updateTask",
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
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/task",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Task was updated",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Task",
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
export default updateTask;
