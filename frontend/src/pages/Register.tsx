import { useState } from "react";
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confrimPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const [isLoading, setIsLoading] = useState(false);

//getting the values from state
function handleSubmit() {
  const currentUsername = username;
  const currentEmail = email;
  const currentPassword = password;
  const currentConfirmPassword = confrimPassword;

  //check if password matches confirm password
  if (currentPassword !== currentConfirmPassword) {
    setError("Password did not match");
    return;
  }
}
function Register() {
  return (
    <div className="register-page">
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Choose a username" />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Create a password" />
      </div>

      <div className="input-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm your password"
        />
      </div>
      <button>Register</button>

      <div className="or">
        <hr />
        <p>OR</p>
        <hr />
      </div>
      <p className="auth-switch">
        Already have an account? <a href="">Login</a>
      </p>
    </div>
  );
}

export default Register;
