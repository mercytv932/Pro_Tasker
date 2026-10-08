import { useEffect, useState, type SubmitEvent } from "react";
import { Link } from "react-router-dom";
import { getProjects, createProject } from "../services/projectApi";
import type { Project } from "../types/project";
import ProjectForm from "../components/ProjectForm";
import ProjectCard from "../components/ProjectCard";
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
  }, []);

  //crate project button
  async function createProjectButton(e: SubmitEvent) {
    e.preventDefault();

    const currentProjectName = projectName;
    const currentProjectDescription = projectDescription;
    const newProject = await createProject(
      currentProjectName,
      currentProjectDescription,
    ); //creates the project in the backend
    setProjects((prevProjects) => [...prevProjects, newProject]); //take exiisting projects ...prevProjects and add new project to it.
    setProjectName("");
    setProjectDescription("");
  }

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          <ProjectCard project={project} />{" "}
          {/*Project Card display from projectCard*/}
          <Link to={`/project/${project._id}`}>view project</Link>
        </div>
      ))}
      {/* Project create form from ProjctForm */}
      <ProjectForm
        projectName={projectName}
        setProjectName={setProjectName}
        projectDescription={projectDescription}
        setProjectDescription={setProjectDescription}
        createProjectButton={createProjectButton}
      />
    </div>
  );
}

export default Dashboard;
