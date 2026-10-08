import type { SubmitEvent } from "react";

type TaskFormProps = {
  taskTitle: string;
  setTaskTitle: (value: string) => void;
  taskDescription: string;
  setTaskDescription: (value: string) => void;
  createTaskButton: (e: SubmitEvent) => void;
};

function TaskForm({
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
  createTaskButton,
}: TaskFormProps) {
  return (
    <form onSubmit={createTaskButton}>
      <h4>Add Task</h4>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <button>Create Task</button>
    </form>
  );
}

export default TaskForm;
