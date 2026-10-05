function Login() {
  return (
    <div className="login-page email">
      <div className="input-group email">
        <label htmlFor="email">Email</label>
        <input type="email" />
      </div>
      <div className="input-group email">
        <label htmlFor="password">Password</label>
        <input type="password" />
      </div>
      <button>Login</button>
      <div className="or">
        <hr />
        <p>OR</p>
        <hr />
      </div>
      <p>
        Don't have an account? <a href="">Register</a>
      </p>
    </div>
  );
}

export default Login;
