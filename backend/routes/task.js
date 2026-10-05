const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController.js");

const authentication = require("../middleware/authMiddleware.js");

router.use(authentication);
