import { useContext } from "react";
import AuthContext from "../context/AuthenticationContext";
import { Link } from "react-router-dom";
function Navbar() {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("Navbar must be used in AuthProvider"); //If there isn't AuthProvider around Navbar
  }

  const { user, logout } = auth;

  if (!user) {
    return null;
  }
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/dashboard">
        <span className="navbar-brand-mark" aria-hidden="true" />
        <span>
          Task<span className="navbar-brand-accent">Planner</span>
        </span>
      </Link>
      <div className="navbar-links">
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    
      {/* <p className="navbar-welcome">Welcome, {user.username}</p> */}

      <button className="navbar-logout" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
