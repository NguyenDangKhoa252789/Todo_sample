const deleteUser = {
  delete: {
    tags: ["User"],
    description: "Delete user by id",
    operationId: "deleteUser",
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
        description: "User was deleted",
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
export default deleteUser;
