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