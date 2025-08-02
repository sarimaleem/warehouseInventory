import { createContext } from "react";

export type ModalControl = {
  doClose: () => void;
};

export const ModalControlContext = createContext<ModalControl | undefined>(
  undefined,
);
