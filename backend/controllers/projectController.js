const Project = require("../models/Project.js");
const Task = require("../models/Task.js");

//get all projects
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

//Create a new project
const postProject = async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user: req.user._id,
    });
    return res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "Failed to create project" });
  }
};
