const updateUser = {
  put: {
    tags: ["User"],
    description: "Update user by id",
    operationId: "updateUser",
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
      200: {
        description: "User was updated",
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
              $ref: "#/components/schemas/rror",
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
export default updateUser;
