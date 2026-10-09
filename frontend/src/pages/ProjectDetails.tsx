import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { type SubmitEvent } from "react";
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
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
function ProjectDetails() {
  const [project, setProject] = useState<Project | null>(null); //Store the project we get from backend. Starts null
  const [editingProject, setEditingProject] = useState(false);
  const [editProjectName, setEditProjectName] = useState("");
  const [editProjectDescription, setEditProjectDescription] = useState("");

  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  //task states
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editTaskTitle, setEditTaskTitle] = useState("");
  const [editTaskDescription, setEditTaskDescription] = useState("");

  const { id } = useParams(); //Gets the project's id from the url, we use that to ask backend for that project.
  const navigate = useNavigate();

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
    return <p>Add projects</p>;
  }
  async function editProjectButton() {
    if (!id) {
      return;
    }
    const updatedProject = await updateProject(id, {
      name: editProjectName,
      description: editProjectDescription,
    });
    setProject(updatedProject);
    setEditingProject(false);
  }
  async function deleteProjectButton() {
    if (!id) {
      return;
    }
    await deleteProject(id);
    navigate("/dashboard"); //after
  }

  async function createTaskButton(e: SubmitEvent) {
    e.preventDefault();

    const currentTaskName = taskTitle;
    const currentTaskDescription = taskDescription;
    if (!id) {
      return;
    }
    const newTask = await createTask(id, {
      title: currentTaskName,
      description: currentTaskDescription,
    });
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskTitle("");
    setTaskDescription("");
  }

  async function deleteTaskButton(taskId: string) {
    await deleteTask(taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
  } //new tasks state = if this is not the task we deleted, keep the task

  function startEditingTask(task: Task) {
    setEditingTaskId(task._id);
    setEditTaskTitle(task.title);
    setEditTaskDescription(task.description);
  } //Starts editing and loading current task values into form

  async function editTaskButton(
    taskId: string,
    updatedTask: { title: string; description: string },
  ) {
    const updatedTaskData = await updateTask(taskId, updatedTask);

    setTasks((prevTasks) =>
      prevTasks.map((task) => (task._id === taskId ? updatedTaskData : task)),
    );

    setEditingTaskId(null); //edit form closes after edit button clicked
  } //Runs when clicking save to save the edited values

  return (
    <div className="project-details">
      <Link className="project-back-link" to="/dashboard">
        Back to Dashboard
      </Link>
      <div className="project-header">
        <h2 className="project-title">{project.name}</h2>

        <p className="project-description">{project.description}</p>

        <div className="project-actions">
          <button
            className="project-edit-button"
            onClick={() => {
              setEditingProject(true);
              setEditProjectName(project.name);
              setEditProjectDescription(project.description);
            }}
          >
            Edit Project
          </button>

          <button
            className="project-delete-button"
            onClick={deleteProjectButton}
          >
            Delete Project
          </button>
        </div>

        {editingProject ? (
          <div className="project-edit-form">
            <input
              className="project-edit-input"
              type="text"
              value={editProjectName}
              onChange={(e) => setEditProjectName(e.target.value)}
            />

            <input
              className="project-edit-input"
              type="text"
              value={editProjectDescription}
              onChange={(e) => setEditProjectDescription(e.target.value)}
            />

            <button className="project-save-button" onClick={editProjectButton}>
              Save
            </button>
          </div>
        ) : null}
      </div>

      <h3>Tasks</h3>
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          deleteTaskButton={deleteTaskButton}
          startEditingTask={startEditingTask}
          editTaskButton={editTaskButton}
          editingTaskId={editingTaskId}
          editTaskTitle={editTaskTitle}
          setEditingTaskTitle={setEditTaskTitle}
          editTaskDescription={editTaskDescription}
          setEditTaskDescription={setEditTaskDescription}
        />
      ))}
      <TaskForm
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        createTaskButton={createTaskButton}
      />
    </div>
  );
}

export default ProjectDetails;
