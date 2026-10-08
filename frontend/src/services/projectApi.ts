const API_URL = import.meta.env.VITE_API_URL;

//1 Get projects from the backend/view all projects
export async function getProjects() {
  const token = localStorage.getItem("token"); //Save token so that projectAuth.ts can use it.

  const response = await fetch(`${API_URL}/api/projects`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json(); //turns the JSON response "(getAllProjects)" to JavaScript value
  console.log(response.status);
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Couldn't get the projects");
  }
  return data;
}

//2 Create a new project
export async function createProject(name: string, description: string) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/api/projects`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Couldn't create the project");
  }
  return data;
}
//Get a project/view one project
export async function getProject(id: string) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/api/projects/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Couldn't get the project");
  }
  return data;
}
//Update a project
export async function updateProject(
  id: string,
  updatedData: {
    name: string;
    description: string;
  },
) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/api/projects/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Couldn't update the project");
  }
  return data;
}
//Delete a project
export async function deleteProject(id: string) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/api/projects/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Couldn't delete the project");
  }
  return data;
}
