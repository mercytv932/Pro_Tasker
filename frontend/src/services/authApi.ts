const API_URL = import.meta.env.VITE_API_URL;

//Register function
export async function registerUser(
  username: string,
  email: string,
  password: string,
) {
  const response = await fetch(`${API_URL}/api/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", //Allows browser to save the HttpOnly cookie
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create account");
  }
  return data;
}

//Login funcion
export async function loginUser(email: string, password: string) {
  const response = await fetch(`${API_URL}/api/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", //Allows browser to save the HttpOnly cookie
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "failed to login");
  }
  return data;
}

// Logout function
export async function logoutUser() {
  const response = await fetch(`${API_URL}/api/users/logout`, {
    method: "POST",
    credentials: "include", // Sends the cookie so the backend can clear it
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to logout");
  }
  return data;
}
