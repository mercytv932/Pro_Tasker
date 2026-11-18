const API_URL = import.meta.env.VITE_API_URL;

//Get/view all tasks
export async function getTasks(projectId: string) {
  const response = await fetch(`${API_URL}/api/tasks/${projectId}/tasks`, {
    credentials: "include",
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Couldn't get the tasks");
  }
  return data;
}

//Create a task
export async function createTask(
  projectId: string,
  newTaskData: { title: string; description: string },
) {
  const response = await fetch(`${API_URL}/api/tasks/${projectId}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(newTaskData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create a task");
  }
  return data;
}

//Update a task
export async function updateTask(
  taskId: string,
  updatedTask: { title: string; description: string },
) {
  const response = await fetch(`${API_URL}/api/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Couldn't update the task");
  }
  return data;
}

//Delete a task
export async function deleteTask(taskId: string) {
  const response = await fetch(`${API_URL}/api/tasks/${taskId}`, {
    method: "DELETE",
    credentials: "include",
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Couldn't delete the task");
  }
  return data;
}
