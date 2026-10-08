import type { SubmitEvent } from "react";

type ProjectFormProps = {
  projectName: string;
  setProjectName: (value: string) => void; //function accepts a string and doesn't return anything
  projectDescription: string;
  setProjectDescription: (value: string) => void; //function accepts a string and doesn't return anything
  createProjectButton: (e: SubmitEvent) => void;
};

function ProjectForm({
  projectName,
  setProjectName,
  projectDescription,
  setProjectDescription,
  createProjectButton,
}: ProjectFormProps) {
  return (
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
  );
}

export default ProjectForm;
