const Project = require("../models/Project.js");
const Task = require("../models/Task.js");

const getProjects = async (req, res) => {
  try {
    const getAllProjects = await Project.find({
      user: req.user._id,
    });
    return res.status(200).json(getAllProjects);
  } catch (error) {
    res.status(500).json({ message: "Failed to return all projects" });
  }
};
