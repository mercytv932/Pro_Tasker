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
    <form className="task-form" onSubmit={createTaskButton}>
      <h4 className="task-form-title">Add Task</h4>

      <div className="task-form-group">
        <label htmlFor="title">Title</label>
        <input
          className="task-form-input"
          type="text"
          id="title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>

      <div className="task-form-group">
        <label htmlFor="description">Description</label>
        <input
          className="task-form-input"
          type="text"
          id="description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>

      <button className="task-form-button">Create Task</button>
    </form>
  );
}

export default TaskForm;
