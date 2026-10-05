const express = require("express");
const router = express.Router();
const {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController.js");

const authentication = require("../middleware/authMiddleware.js");

router.use(authentication);

router.get("/", getProjects); //Get/view all projects
router.post("/", createProject); //Post/create a new project

router.get("/:id", getProject); //Get/view one project

router.put("/:id", updateProject); //Put/update a project

router.delete("/:id", deleteProject); //Delete a project

module.exports = router;
