import type { Project } from "../types/project";
type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h2 className="project-card-name">{project.name}</h2>
      <p className="project-card-description">{project.description}</p>
    </div>
  );
}

export default ProjectCard;
