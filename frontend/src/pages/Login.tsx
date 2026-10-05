function Login() {
  return (
    <div className="login-page">
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>
      <button>Login</button>

      <div className="or">
        <hr />
        <p>OR</p>
        <hr />
      </div>
      <p className="auth-switch">
        Don't have an account? <a href="">Register</a>
      </p>
    </div>
  );
}

export default Login;
