const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 1 },
  description: { type: String, trim: true, maxlength: 1200 },
  status: {
    type: String,
    required: true,
    enum: ["todo", "In-Progress", "completed"],
    default: "todo",
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
