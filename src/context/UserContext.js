import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const getUser = async () => {
      const isUser = JSON.parse(localStorage.getItem("user"));
      if (isUser?.email && (await axios)) {
        try {
          const res = await axios.post("api/user/login", isUser);
          setUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        } catch (error) {
          console.log(error);
          localStorage.removeItem("user");
        }
      }
    };
    getUser();
  }, []);
  const signOut = () => {
    localStorage.removeItem("user");
    setUser(undefined);
  };
  return (
    <UserContext.Provider
      value={{ user, setUser, isAuthenticated: !!user, signOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
