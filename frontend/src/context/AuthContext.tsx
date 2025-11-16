import {
  checkAuthStatus,
  loginUser,
  registerUser,
  userLogOut,
} from "@/helpers/comunicators";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

type User = {
  name: string;
  email: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isPending: boolean;
};

// eslint-disable-next-line react-refresh/only-export-components
const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    async function checkStatus() {
      setIsPending(true);

      try {
        const data = await checkAuthStatus();
        if (data) {
          setUser({
            email: data.email,
            name: data.name,
          });
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsPending(false);
      }
    }

    checkStatus();
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginUser({ email, password });

    if (data) {
      setUser({
        email: data.email,
        name: data.name,
      });
      setIsLoggedIn(true);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    const data = await registerUser({ name, email, password });

    if (data) {
      setUser({
        email: data.email,
        name: data.name,
      });
      setIsLoggedIn(true);
    }
  };

  const logout = async () => {
    await userLogOut();

    setIsLoggedIn(false);
    setUser(null);
    window.location.reload();
  };

  const value = {
    user,
    isLoggedIn,
    login,
    signup,
    logout,
    isPending,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
