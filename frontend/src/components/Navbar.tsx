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
    <div>
      <p>Welcome, {user.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;
