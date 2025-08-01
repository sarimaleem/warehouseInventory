import {useContext, useEffect, useRef} from "react";
import {ScrollSyncContext} from "../context/ScrollSyncContext.tsx";

export default function useScrollSync(){

    const context = useContext(ScrollSyncContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    const isSyncingRef = useRef(false);

    useEffect(() => {
        const divA = context.divARef.current;
        const divB = context.divBRef.current;
        if (!divA || !divB) return;

        const syncScroll = (
            source: HTMLDivElement,
            target: HTMLDivElement
        ) => {
            if (isSyncingRef.current) return;
            isSyncingRef.current = true;
            target.scrollLeft = source.scrollLeft;
            isSyncingRef.current = false;
        };

        const onScrollA = () => syncScroll(divA, divB);
        const onScrollB = () => syncScroll(divB, divA);

        divA.addEventListener("scroll", onScrollA);
        divB.addEventListener("scroll", onScrollB);

        return () => {
            divA.removeEventListener("scroll", onScrollA);
            divB.removeEventListener("scroll", onScrollB);
        };
    }, [context.divARef, context.divBRef]);

    return { divARef: context.divARef, divBRef: context.divBRef }
}