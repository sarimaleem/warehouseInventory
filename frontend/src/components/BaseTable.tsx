import {useLayoutEffect, useRef, useState} from "react";
import BaseTableHeader from "./BaseTableHeader.tsx";
import BaseTableFooter from "./BaseTableFooter.tsx";
import BaseTableBody from "./BaseTableBody.tsx";
import {ScrollSyncProvider} from "../context/ScrollSyncProvider.tsx";

export type BaseTableColumns = {
    key:string
    name:string
    width:number
}

export type BaseTableRow = Record<string, string>


interface BaseTableProps{
    columns:BaseTableColumns[]
    rows:BaseTableRow[]
}

interface BaseTableCellProps{
    color:string
    text:string
    width:number
    hoverable?: true
}

export function BaseTableCell({text, color, width, hoverable }:BaseTableCellProps){

    const [isOnHover, setIsOnHover] = useState(false);

    const handleMouseHoverActive = () =>{
        setIsOnHover(true)
    }
    const handleMouseHoverEnd = () =>{
        setIsOnHover(false)
    }

    return(
        <div onMouseEnter={handleMouseHoverActive}
             onMouseLeave={handleMouseHoverEnd}
             style={{
                 minWidth: width,
                 backgroundColor:hoverable&&isOnHover?'#dedede':color,
                 borderWidth: `0px 1px 1px 0px`,
                 borderStyle: 'solid',
                 borderColor:'#BCBCBC'}}
             className={"flex w-full bg-blue-500 p-3 bg-white"}>
            {text}
        </div>
    )
}

export default function BaseTable({columns, rows}:BaseTableProps) {

    const divRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        if (divRef.current) {
            const height = divRef.current.offsetHeight;
            console.log('Height:', height);
            setHeight(height)
        }
    }, []);

    return(
        <ScrollSyncProvider>
            <div ref={divRef} className={`flex h-full flex-col w-full  `}>
                <BaseTableHeader columns={columns}/>
                <BaseTableBody rows={rows} columns={columns} height={height}/>
                <BaseTableFooter/>
            </div>
        </ScrollSyncProvider>
    )
}