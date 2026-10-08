import { useContext } from "react";
import AuthContext from "../context/AuthenticationContext";

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
      <p className="navbar-welcome">Welcome, {user.username}</p>
      <button className="navbar-logout" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
