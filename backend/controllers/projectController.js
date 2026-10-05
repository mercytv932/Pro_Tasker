const Project = require("../models/Project.js");
const Task = require("../models/Task.js");

//Get/view all projects
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

//Post/create a new project
const createProject = async (req, res) => {
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

//Get/view a single project
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

//Put/update project
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (project && project.user.equals(req.user._id)) {
      const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedProject);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update project" });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (project && project.user.equals(req.user._id)) {
      await Project.findByIdAndDelete(id);
      res.status(200).json({ message: "Successfully deleted the project" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete project" });
  }
};

module.exports = {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
};
