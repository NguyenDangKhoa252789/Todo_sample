const getAllTasks = {
  get: {
    tags: ["Task"],
    description: "Get all Task",
    operationId: "getAllTasks",
    parameters: [],
    responses: {
      200: {
        description: "Tasks were obtained",
        content: {
          "application/json": {
            schema: {
              $type: "array",
              $ref: "#/components/schemas/task",
            },
          },
        },
      },
    },
  },
};
export default getAllTasks;
