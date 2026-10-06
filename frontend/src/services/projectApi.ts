//1 Get projects from the backend/view all projects
export async function getProjects() {
  const token = localStorage.getItem("token"); //Save token so that projectAuth.ts can use it.

  const response = await fetch("http://localhost:3001/api/projects", {
    headers: {
      Authorization: `Bearer${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json(); //turns the JSON response "(getAllProjects)" to JavaScript value
  if (!response.ok) {
    throw new Error(data.message || "Couldn't get the projects");
  }
  return data;
}

//2 Create a new project
export async function createProject(name: string, description: string) {
  const response = await fetch("http://localhost:3001/api/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could create the project");
  }
  return data;
}
//Get a project/view one project
export async function getProject(id: string) {
  const token = localStorage.getItem("token");

  const response = await fetch(`http://localhost:3001/api/project/${id}`, {
    headers: {
      Authorization: `Bearer${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Couldn't get the project");
  }
}
//Updare a project
//Delete a project
