import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [allFav, setAllFav] = useState([]);
  useEffect(() => {
    const getFav = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/user/favorites?userId=" + user._id
      );
      setAllFav(res.data.fav);
    };
    if (user?._id) getFav();
  }, [user?._id]);
  useEffect(() => {
    const getUser = async () => {
      const isUser = JSON.parse(localStorage.getItem("user"));
      if (isUser?.email && (await axios)) {
        try {
          const res = await axios.post("/api/user/login", isUser);
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
  const addFav = async (videoId) => {
    await axios
      .post("/api/user/favorites", { userId: user._id, videoId })
      .then(() => alert("Added Successfully"))
      .catch(() => alert("Sorry error occured"));
    window.location.reload();
  };
  const removeFav = async (favId) => {
    await axios
      .delete(`/api/user/favorites/?favoriteId=${favId}&userId=${user._id}`)
      .then(() => alert("Deleted Successfully"))
      .catch(() => alert("Sorry error occured"));
    window.location.reload();
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: !!user,
        signOut,
        addFav,
        allFav,
        removeFav,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
