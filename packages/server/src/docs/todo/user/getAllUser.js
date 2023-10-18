const getAllusers = {
  get: {
    tags: ["User"],
    description: "Get all user",
    operationId: "getAllUsers",
    parameters: [],
    responses: {
      200: {
        description: "Users were obtained",
        content: {
          "application/json": {
            schema: {
              $type: "array",
              $ref: "#/components/schemas/user",
            },
          },
        },
      },
    },
  },
};
export default getAllusers;
