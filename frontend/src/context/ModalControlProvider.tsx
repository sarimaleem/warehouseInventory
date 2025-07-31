import {type ReactNode} from 'react';
import {ModalControlContext} from "./ModalControlContext.tsx";

interface ModalControlProviderProps{
    doClose:()=>void;
    children:ReactNode;
}
export const ModalControlProvider = ({doClose, children }:ModalControlProviderProps) => {
    return (
        <ModalControlContext.Provider value={{doClose}}>
            {children}
        </ModalControlContext.Provider>
    );
};


