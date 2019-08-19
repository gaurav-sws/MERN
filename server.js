const express = require("express");
const app = express();
const { port } = require("./config/config");
const connectDB = require("./config/db");
connectDB();
app.use(express.json());
app.get("/", (req, res) => res.send("Api Running"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
const PORT = port || 4000;
app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
