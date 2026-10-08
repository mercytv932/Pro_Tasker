import { createContext } from "react";
import { type User } from "../types/user";

type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
