import { useEffect, useState } from "react";
import { getProjects } from "../services/projectApi";

type Project = {
  _id: string;
  name: string;
  description: string;
};

function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]); //load function state
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects();
      console.log(data);
      setProjects(data);
    }

    loadProjects();
  }, []);
  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}

      <form>
        <h3>Create Project</h3>
        <div>
          <label htmlFor="name">Project Name</label>
          <input type="text" placeholder="project name..." id="name" />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="describe your project..."
            id="description"
          />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
}

export default Dashboard;
