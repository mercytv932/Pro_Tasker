function Login() {
  return (
    <div className="login-page">
      <div className="email">
        <label htmlFor="email">Email</label>
        <input type="email" />
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <input type="password" />
      </div>
      <button>Login</button>
      <div className="or">
        <hr />
        <p>OR</p>
        <hr />
        <p>
          Don't have an account? <a href="">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
