import { useNavigate } from "react-router-dom";
import { useState, type ReactNode } from "react";
import AuthContext from "../context/AuthenticationContext";
import type { User } from "../types/user";

type AuthProviderprops = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderprops) {
  const [user, setUser] = useState<User | null>(null); //Starts as no user logged in yet  = null;

  const navigate = useNavigate();

  //login
  function login(userData: User) {
    setUser(userData);
  }

  //log out
  function logout() {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider; /*AuthProvider stores user information and provides it to AuthContext. 
Then AuthContext lets components access the user's info so that they know who's logged in
 */
