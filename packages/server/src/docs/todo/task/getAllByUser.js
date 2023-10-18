const getAllTasksByUser = {
  get: {
    tags: ["Task"],
    description: "Get all Tasks by user",
    operationId: "getAllTasksByUser",
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
      description: "Tasks retrieved successfully",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
              $ref: "#/components/schemas/task",
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
export default getAllTasksByUser;
