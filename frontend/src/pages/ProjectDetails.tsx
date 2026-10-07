import { useState, useEffect } from "react";
import {
  getProject,
  updateProject,
  deleteProject,
} from "../services/projectApi";
import type { Project } from "../types/project";

const [project, setProject] = useState<Project | null>(null); //We store the page's project here. At beginning, it'll contain a project or [];
const [projectName, setProjectName] = useState("");
const [projectDescription, setProjectDescription] = useState("");
const [error, setError] = useState("");
const [isLoading, setIsLoading] = useState(false);

function ProjectDetails() {
  return <div>{}</div>;
}

export default ProjectDetails;
