import type { Task } from "../types/task";

type TaskCardProps = {
  task: Task;
  deleteTaskButton: (taskId: string) => void;
  startEditingTask: (task: Task) => void;
  editTaskButton: (
    taskId: string,
    updatedTask: { title: string; description: string },
  ) => void;
  //edit a task props
  editingTaskId: string | null;
  editTaskTitle: string;
  setEditingTaskTitle: (value: string) => void;
  editTaskDescription: string;
  setEditTaskDescription: (value: string) => void;
};

function TaskCard({
  task,
  deleteTaskButton,
  startEditingTask,
  editTaskButton, //save
  editingTaskId,
  editTaskTitle,
  setEditingTaskTitle,
  editTaskDescription,
  setEditTaskDescription,
}: TaskCardProps) {
  return (
    <div className="task-card">
      <h4 className="task-card-title">{task.title}</h4>

      <p className="task-card-description">{task.description}</p>

      <p className="task-card-status">{task.status}</p>

      <div className="task-card-actions">
        <button
          className="task-delete-button"
          onClick={() => deleteTaskButton(task._id)}
        >
          Delete Task
        </button>

        <button
          className="task-edit-button"
          onClick={() => startEditingTask(task)}
        >
          Edit Task
        </button>
      </div>

      {editingTaskId === task._id ? (
        <div className="task-edit-form">
          <input
            className="task-edit-input"
            type="text"
            value={editTaskTitle}
            onChange={(e) => setEditingTaskTitle(e.target.value)}
          />

          <input
            className="task-edit-input"
            type="text"
            value={editTaskDescription}
            onChange={(e) => setEditTaskDescription(e.target.value)}
          />

          <button
            className="task-save-button"
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
  );
}

export default TaskCard;
