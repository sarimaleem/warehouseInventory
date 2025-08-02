import { type ReactNode, useRef } from "react";
import { ScrollSyncContext } from "./ScrollSyncContext.tsx";

interface ScrollSyncProviderProps {
  children: ReactNode;
}

export const ScrollSyncProvider = ({ children }: ScrollSyncProviderProps) => {
  const divARef = useRef<HTMLDivElement>(null);
  const divBRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollSyncContext.Provider value={{ divARef, divBRef }}>
      {children}
    </ScrollSyncContext.Provider>
  );
};
