"use client";

import React, { useState, createContext, useContext } from "react";

export const ActiveSectionContext = createContext(null);

function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState("Home");
  // keep track of this to disable the observer temporarily when user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActionSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}

export default ActiveSectionContextProvider;
