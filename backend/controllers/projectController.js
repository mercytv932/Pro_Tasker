const Project = require("../models/Project.js");
const Task = require("../models/Task.js");

//Get all projects
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

//View a single project
const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (project && project.user.equals(req.user._id)) {
      res.status(200).json(project);
    }
    return res.status(403).json({ message: "Couldn't get the project" });
  } catch (error) {
    res.status(500).json({ message: "Failed to get project" });
  }
};
