/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, ReactNode } from "react";

interface SidebarContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const defaultContextValue: SidebarContextProps = {
  isSidebarOpen: false,
  toggleSidebar: () => {},
};

const SidebarContext = createContext<SidebarContextProps>(defaultContextValue);

export const useSidebarContext = () => useContext(SidebarContext);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
