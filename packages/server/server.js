import Express from "express";

const app = Express();
const PORT = 5173;
app.use(Express.json());
app.get("/", (req, res) => {
  console.log("ok");
});

app.listen(PORT, () => {
  console.log(`server start at ${PORT}`);
});
