import { createContext, useContext } from "react";

export const Stories = createContext(null);
export const StoriesProvider = Stories.Provider
export default function useStories() {
    return useContext(Stories);
}