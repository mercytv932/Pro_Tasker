function Register() {
  return (
    <div className="register-page">
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>

      <div className="input-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" />
      </div>
      <button>Register</button>

      <div className="or">
        <hr />
        <p>OR</p>
        <hr />
      </div>
      <p>
        Already have an account? <a href="">Login</a>
      </p>
    </div>
  );
}

export default Register;
