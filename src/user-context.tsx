import React, { useContext } from "react";
export const UserContext = React.createContext({});

export function useUser() {
  return useContext(UserContext);
}
