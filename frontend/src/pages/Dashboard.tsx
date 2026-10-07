import { useEffect, useState, type SubmitEvent } from "react";
import { getProjects, createProject } from "../services/projectApi";

type Project = {
  _id: string;
  name: string;
  description: string;
};

function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]); //loadProjects function state

  const [projectName, setProjectName] = useState(""); //create project state
  const [projectDescription, setProjectDescription] = useState(""); //create project state

  //load projects or getProjects();
  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects();
      console.log(data);
      setProjects(data);
    }
    loadProjects();
    createProject;
  }, []);

  //crate project button
  async function createProjectButton(e: SubmitEvent) {
    e.preventDefault();

    const currentProjectName = projectName;
    const currentProjectDescription = projectDescription;
    await createProject(currentProjectName, currentProjectDescription);
  }

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}

      <form onSubmit={createProjectButton}>
        <h3>Create Project</h3>
        <div>
          <label htmlFor="name">Project Name</label>
          <input
            type="text"
            placeholder="project name..."
            id="name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="describe your project..."
            id="description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Dashboard;
