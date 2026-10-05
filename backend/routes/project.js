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

router.get("/", getProjects);
router.post("/", createProject);

router.get("/:id", getProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

module.exports = router;
