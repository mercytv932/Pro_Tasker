const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 1 },
  description: { type: String, trim: true, maxlength: 1200 },
  status: {
    type: String,
    require: true,
    enum: ["todo", "completed"],
    default: "todo",
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});
