const getUser = {
  get: {
    tags: ["User"],
    description: "Get user by id",
    operationId: "getUser",
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "string",
        },
        description: "User id",
      },
    ],
    responses: {
      200: {
        description: "User was obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/user",
            },
          },
        },
      },
      404: {
        description: "User was not found",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/error",
              $examples: [
                {
                  code: 404,
                  message: "User not found",
                },
              ],
            },
          },
        },
      },
    },
  },
};
export default getUser;
