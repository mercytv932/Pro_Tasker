function Register() {
  return (
    <div>
      <div className="input-group email">
        <label htmlFor="email">Email</label>
        <input type="email" />
      </div>
      <div className="input-group password">
        <label htmlFor="password">Password</label>
        <input type="password" />
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
