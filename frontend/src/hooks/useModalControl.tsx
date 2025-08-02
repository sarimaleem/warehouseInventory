import { useContext } from "react";
import { ModalControlContext } from "../context/ModalControlContext.tsx";

export default function useModalControl() {
  const context = useContext(ModalControlContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const handleClose = () => context.doClose();

  return { handleClose };
}
