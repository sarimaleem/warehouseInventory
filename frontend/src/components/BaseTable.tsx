import {useEffect, useRef, useState} from "react";

type BaseTableColumns = {
    key:string
    name:string
    width:number
}

type BaseTableRow = Record<string, string>


interface BaseTableProps{
    columns:BaseTableColumns[]
    rows:BaseTableRow[]
}

interface BaseTableCellProps{
    color:string
    text:string
    width:number
}

function BaseTableCell({text, color, width}:BaseTableCellProps){
    return(
        <div style={{
            minWidth: width,
            backgroundColor:color,
            borderWidth: `0px 1px 1px 0px`,
            borderStyle: 'solid',
            borderColor:'#BCBCBC'
        }} className={"flex w-full bg-blue-500 p-3 bg-white"}>
            {text}
        </div>
    )
}



interface BaseTableHeaderProps{
    columns:BaseTableColumns[]
}

function BaseTableHeader({columns}:BaseTableHeaderProps){

    return(
        <div style={{
            color: '#9B9B9B',
            backgroundColor:'#F5F5F5',
            borderRadius:`10px 10px 0px 0px`,
            borderWidth: `0px 1px 0px 0px`,
            borderStyle: 'solid',
            borderColor:'#BCBCBC'
        }} className={"flex flex-row w-full  "}>
            {columns.map((column)=><BaseTableCell
                color={'#F5F5F5'}
                text={column.name}
                width={column.width}
            />)}
        </div>
    )
}

interface BaseTableRowProps{
    row:BaseTableRow
    columns:BaseTableColumns[]
}


function BaseTableRow({row, columns}:BaseTableRowProps){
    return(
        <div style={{
            borderStyle: 'solid',
            borderColor:'#BCBCBC'
        }} className={"flex flex-row  bg-white"}>
            {columns.map((column)=><BaseTableCell
                color={'#ffffff'}
                text={row[column.key]}
                width={column.width}
            />)}
        </div>
    )
}


export default function BaseTable({columns, rows}:BaseTableProps) {

    const divRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (divRef.current) {
            const height = divRef.current.offsetHeight;
            console.log('Height:', height);
            setHeight(height)
        }
    }, []);


    const divARef = useRef<HTMLDivElement>(null);
    const divBRef = useRef<HTMLDivElement>(null);
    const isSyncingRef = useRef(false);

    useEffect(() => {
        const divA = divARef.current;
        const divB = divBRef.current;
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
    }, []);


    return(
        <div  ref={divRef} className={`flex h-full flex-col w-full  `}>
            <div style={{
                borderColor: '#BCBCBC',
                borderWidth: '1px 1px 0px 1px ',
                borderStyle: 'solid',
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE/Edge
            }} className={'flex w-full flex-col overflow-scroll whitespace-nowrap rounded-t-lg'} ref={divARef}>
                <BaseTableHeader columns={columns}/>
            </div>
            <div style={{
                borderColor: '#BCBCBC',
                borderWidth: '0px 1px 0px 1px ',
                borderStyle: 'solid',
                maxHeight: height -175
            }} className={'w-full  overflow-y-auto'}  ref={divBRef}>
                {
                    rows.map(row => <BaseTableRow row={row} columns={columns}/>)
                }
            </div>
            <div style={{
                borderColor: '#BCBCBC',
                borderWidth: '0px 1px  1px 1px ',
                borderStyle: 'solid',
            }} className={'flex w-full flex-col  min-h-20 overflow-scroll rounded-b-lg'}>
            </div>
        </div>
    )
}