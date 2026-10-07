import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getProject,
  updateProject,
  deleteProject,
} from "../services/projectApi";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskApi";
import type { Project } from "../types/project";
import type { Task } from "../types/task";
function ProjectDetails() {
  const [project, setProject] = useState<Project | null>(null); //Store the project we get from backend. Starts null
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //task states
  const [tasks, setTasks] = useState<Task[]>([]);

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

  useEffect(() => {
    async function loadTasks() {
      if (!id) {
        return;
      }
      const data = await getTasks(id);
      setTasks(data);
    }

    loadTasks();
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

      <h3>Tasks</h3>

      {tasks.map((task) => (
        <div key={task._id}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>{task.status}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectDetails;
