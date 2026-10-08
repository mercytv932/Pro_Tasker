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
    <form className="project-form" onSubmit={createProjectButton}>
      <h3 className="project-form-title">Create Project</h3>

      <div className="project-form-group">
        <label htmlFor="name">Project Name</label>
        <input
          className="project-form-input"
          type="text"
          placeholder="project name..."
          id="name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div className="project-form-group">
        <label htmlFor="description">Description</label>
        <input
          className="project-form-input"
          type="text"
          placeholder="describe your project..."
          id="description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
      </div>

      <button className="project-form-button" type="submit">
        Create
      </button>
    </form>
  );
}

export default ProjectForm;
