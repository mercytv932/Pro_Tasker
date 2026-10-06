//Get projects from the backend/view all projects

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

//Create a new project
//Get a project/view one project
//Updare a project
//Delete a project
