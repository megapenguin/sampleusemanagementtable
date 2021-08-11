import React from "react";
import { useLocalStore, useObserver } from "mobx-react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  let userList = useLocalStore(() => ({
    users: [],
    addUser: (user) => {
      userList.users.push(user);
    },
  }));
  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export default UserProvider;
