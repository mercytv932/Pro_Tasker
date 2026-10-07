import { useEffect, useState } from "react";
import { getProjects } from "../services/projectApi";

type Project = {
  _id: string;
  name: string;
  description: string;
};

function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);

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
    </div>
  );
}

export default Dashboard;
