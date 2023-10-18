const createtask = {
  post: {
    tags: ["Task"],
    description: "Create Task",
    operationId: "createtasks",
    parameters: [],
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
      201: {
        description: "task created successfully",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
export default createtask;
