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
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "failed to login");
  }
  return data;
}
