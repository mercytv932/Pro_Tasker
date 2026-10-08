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
    return <p>Loading project</p>;
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
    <div>
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <button
          onClick={() => {
            setEditingProject(true);
            setEditProjectName(project.name);
            setEditProjectDescription(project.description);
          }}
        >
          Edit project
        </button>
        <button onClick={deleteProjectButton}>Delete Project</button>
        {editingProject ? (
          <div>
            <input
              type="text"
              value={editProjectName}
              onChange={(e) => setEditProjectName(e.target.value)}
            />

            <input
              type="text"
              value={editProjectDescription}
              onChange={(e) => setEditProjectDescription(e.target.value)}
            />

            <button onClick={editProjectButton}>Save</button>
          </div>
        ) : null}
      </div>

      <h3>Tasks</h3>

      {tasks.map((task) => (
        <div key={task._id}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>{task.status}</p>
          <div>
            <button onClick={() => deleteTaskButton(task._id)}>
              Delete Task
            </button>
            <button onClick={() => startEditingTask(task)}>Edit Task</button>
            {editingTaskId === task._id ? (
              <div>
                <input
                  type="text"
                  value={editTaskTitle}
                  onChange={(e) => setEditTaskTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={editTaskDescription}
                  onChange={(e) => setEditTaskDescription(e.target.value)}
                />

                <button
                  onClick={() =>
                    editTaskButton(task._id, {
                      title: editTaskTitle,
                      description: editTaskDescription,
                    })
                  }
                >
                  Save
                </button>
              </div>
            ) : null}
          </div>
        </div>
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
