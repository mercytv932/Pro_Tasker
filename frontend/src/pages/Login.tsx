import { useState, type SubmitEvent } from "react";
import { loginUser } from "../services/authApi";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const [isLoading, setIsLoading] = useState(false);

async function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const currentEmail = email;
  const currentPassword = password;

  if (!email || !password) {
    setError("Please enter you email and password");
    return;
  }

  setIsLoading(true);
  setError("");
  setSuccess("");

  try {
    const data = await loginUser(currentEmail, currentPassword);
    console.log(data);

    setSuccess("Login successful");
  } catch (error) {
    console.error("Login error", error);
    setError("Login failed");
  } finally {
    setIsLoading(false);
  }
}

function Login() {
  return (
    <form className="login-page" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Processing" : "Login"}
      </button>

      <div className="or">
        <hr />
        <p>OR</p>
        <hr />
      </div>
      <p className="auth-switch">
        Don't have an account? <a href="">Register</a>
      </p>
    </form>
  );
}

export default Login;
