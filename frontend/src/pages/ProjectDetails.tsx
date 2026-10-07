import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const { id } = useParams(); //Gets the project's id from the url, we use that to ask backend for that project.

  useEffect(() => {
    async function loadProject(id: string | undefined) {
      if (!id) {
        return;
      }
      const data = await getProject(id);
      setProject(data);
    }
    loadProject(id);
  }, [id]);

  return <div>{}</div>;
}

export default ProjectDetails;
