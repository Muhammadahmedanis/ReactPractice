// import React from "react";
// const userContext = React.createContext();
// export default userContext;


// better and production level
import { createContext, useContext } from "react";
export const UserContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
})

export const UserProvider = UserContext.Provider

export default function useTheme() {
    return useContext(UserContext)
}