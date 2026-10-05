import { useState } from "react";
import { type SubmitEvent } from "react";
import { registerUser } from "../services/authApi";

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const [isLoading, setIsLoading] = useState(false);

//getting the values from state
async function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const currentUsername = username;
  const currentEmail = email;
  const currentPassword = password;
  const currentConfirmPassword = confirmPassword;

  //check if password matches confirm password
  if (currentPassword !== currentConfirmPassword) {
    setError("Password did not match");
    return;
  }
  setIsLoading(true); //We're currently talking to the  backend
  setError(""); //Clears any previous errors.
  setSuccess("");

  //Tells auth.ts to register this user and wait for backend response.
  try {
    const data = await registerUser(
      currentUsername,
      currentEmail,
      currentPassword,
    );
    console.log(data);

    setSuccess("Account created successfully");
  } catch (error) {
    console.error("registration error:", error);
    setError("Registration failed");
  } finally {
    setIsLoading(false); //loading stops whether no matter the outcome.
  }
}

function Register() {
  return (
    <form className="register-page" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}

      {/*disable prevents clicking clicking when request is running*/}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Registering" : "Register"}
      </button>

      <div className="or">
        <hr />
        <p>OR</p>
        <hr />
      </div>
      <p className="auth-switch">
        Already have an account? <a href="">Login</a>
      </p>
    </form>
  );
}

export default Register;
