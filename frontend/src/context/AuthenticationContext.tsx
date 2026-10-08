import { createContext, useState, type ReactNode } from "react";
import { type User } from "../types/user";
type AuthoContextType = {
  user: User | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthoContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
