"use client";

import { createContext, useContext, useState } from "react";

const QueryContext = createContext({
  query: "",
  setQuery: (query: string) => {},
});

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState("");

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};

export const useQuery = () => useContext(QueryContext);
