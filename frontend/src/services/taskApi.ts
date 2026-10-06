//Get/view all tasks
export async function getTasks(projectId: string) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `http://localhost:3001/api/tasks/${projectId}/tasks`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

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
  const token = localStorage.getItem("token");

  const response = await fetch(
    `http://localhost:3001/api/tasks/${projectId}/tasks`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaskData),
    },
  );

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
  const token = localStorage.getItem("token");

  const response = await fetch(`http://localhost:3001/api/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
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
  const token = localStorage.getItem("token");

  const response = await fetch(`http://localhost:3001/api/tasks/${taskId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Couldn't delete the task");
  }
  return data;
}
