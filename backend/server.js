const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const PORT = process.env.PORT || 3001;

const userRouter = require("./routes/auth.js");
const projectRouter = require("./routes/project.js");
const taskRouter = require("./routes/task.js");
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/projects", projectRouter);
app.use("/api/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
