import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.NODE_ENV ?? 5999;
const server = {
  servers: [
    {
      url: `http://localhost:${PORT}`,
    },
  ],
};
export default server;
