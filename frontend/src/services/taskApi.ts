//Get/view all tasks
export async function getTasks(projectId: string) {
  const token = localStorage.getItem("token");

  const response = await fetch(`http://localhost:3001/api/${projectId}/tasks`, {
    headers: {
      Authorization: `Bearer${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Couldn't get the tasks");
  }
}

//Create a task
export async function createTask(
  projectid: string,
  newTaskData: { title: string; description: string },
) {
  const token = localStorage.getItem("token");

  const response = await fetch(`http://localhost:3001/api/${projectid}tasks`, {
    method: "POST",
    headers: {
      Authorization: `Bearer${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newTaskData }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create a task");
  }
}

//Update a task
export async function updateTask(
  taskId: string,
  updatedTask: { title: string; description: string },
) {
  const token = localStorage.getItem("token");

  const response = await fetch(`http://localhost:3001/api/:${taskId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ updatedTask }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Couldn't update the task");
  }
}

//Delete a task
export async function deleteTask(taskId: string) {
  const token = localStorage.getItem("token");

  const response = await fetch(`http://localhost:3001/api/${taskId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Couldn't delete the task");
  }
}
