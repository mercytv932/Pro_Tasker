import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getProject,
  updateProject,
  deleteProject,
} from "../services/projectApi";
import type { Project } from "../types/project";
function ProjectDetails() {
  const [project, setProject] = useState<Project | null>(null); //Store the project we get from backend. Starts null
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  if (!project) {
    return <p>Loading project</p>;
  }
  return (
    <div>
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectDetails;
