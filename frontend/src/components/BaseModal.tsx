import { type ReactNode, type SyntheticEvent } from "react";

interface BaseModalProps {
  element: ReactNode;
  closeModal: () => void;
  closeable?: true;
}

export default function BaseModal({
  element,
  closeModal,
  closeable,
}: BaseModalProps) {
  const stopAll = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="w-full h-full flex bg-black/50 fixed top-0 left-0 z-100 justify-center grid content-center">
      <div onClick={stopAll} className={"bg-white  rounded-sm "}>
        {closeable && <button onClick={closeModal}>x</button>}
        {element}
      </div>
    </div>
  );
}
