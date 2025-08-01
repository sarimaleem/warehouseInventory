import {createContext, type RefObject} from "react";

export type ScrollSyncControl = {
    divARef: RefObject<HTMLDivElement | null>
    divBRef: RefObject<HTMLDivElement | null>
};


export const ScrollSyncContext = createContext<ScrollSyncControl | undefined>(undefined);