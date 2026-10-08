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
  editTaskButton,
  editingTaskId,
  editTaskTitle,
  setEditingTaskTitle,
  editTaskDescription,
  setEditTaskDescription,
}: TaskCardProps) {
  return (
    <div>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>{task.status}</p>

      <button onClick={() => deleteTaskButton(task._id)}>Delete Task</button>
      <button onClick={() => startEditingTask(task)}>Edit Task</button>
      {editingTaskId === task._id ? (
        <div>
          <input
            type="text"
            value={editTaskTitle}
            onChange={(e) => setEditingTaskTitle(e.target.value)}
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
  );
}

export default TaskCard;
