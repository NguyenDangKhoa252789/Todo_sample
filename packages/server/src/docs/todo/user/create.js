const createUser = {
  post: {
    tags: ["User"],
    description: "Create User",
    operationId: "createUsers",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/user",
          },
        },
      },
    },
    responses: {
      201: {
        description: "User created successfully",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
export default createUser;
