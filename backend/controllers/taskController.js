const Task = require("../models/Task.js");
const Project = require("../models/Project.js");

//Get/view all tasks
const getTasks = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findById(projectId);
    if (project && project.user.equals(req.user._id)) {
      const getAllTasks = await Task.find({ project: projectId });
      res.status(200).json(getAllTasks);
    }
    return res.status(403).json({ message: "You don't own this project" });
  } catch (error) {
    res.status(500).json({ message: "Failed to get project's tasks" });
  }
};

//Post/create or add a task
const createTask = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findById(projectId);
    if (project & project.user.equals(req.user._id)) {
      const newTask = await Task.create({ ...req.body, project: projectId });
      res.status(200).json(newTask);
    }
    return res.status(403).json({ message: "You don't own this project" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create new task " });
  }
};

//Put/update a task
const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findById(taskId);
    const project = await Project.findById(task.project); //Find the project that owns this task
    if (project && project.user.equals(req.user._id)) {
      const updatedTask = await Task.findByIdAndUpdate(projectId, req.body, {
        new: true,
      });
      res.status(200).json(updatedTask);
    }
    return res.status(403).json({ message: "You don't own this project" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update task" });
  }
};
