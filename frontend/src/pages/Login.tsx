import { useContext, useState, type SubmitEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authApi";
import AuthContext from "../context/AuthenticationContext";

function Login() {
  const auth = useContext(AuthContext); //storing authentication info from AuthContext
  if (!auth) {
    throw new Error("Login must be in AuthProvider"); //If there isn't AuthProvider around login.
  }
  const { login } = auth; //takes login out of auth

  const navigate = useNavigate();
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
      login(data.user); //AuthProvider stores user as the currently logged in user.

      localStorage.setItem("token", data.token);

      setSuccess("Login successful");

      navigate("/dashboard"); //when success navigate to dashboard page
    } catch (error) {
      console.error("Login error", error);
      setError("Login failed");
    } finally {
      setIsLoading(false);
    }

    //navigate to dashboard after login successfull
  }
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
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
}

export default Login;
