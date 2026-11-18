const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoDbConnection = require("./config/dbConnection.js");
const PORT = process.env.PORT || 3001;

const userRouter = require("./routes/auth.js");
const projectRouter = require("./routes/project.js");
const taskRouter = require("./routes/task.js");
const cookieParser = require("cookie-parser");

mongoDbConnection();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/projects", projectRouter);
app.use("/api/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
