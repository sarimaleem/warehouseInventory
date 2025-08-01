import {BaseTableCell, type BaseTableColumns, type BaseTableRow} from "./BaseTable.tsx";
import useScrollSync from "../hooks/useScrollSync.tsx";
import {useState} from "react";



interface BaseTableRowProps{
    row:BaseTableRow
    columns:BaseTableColumns[]
}


function BaseTableRow({row, columns}:BaseTableRowProps){

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
             style={{borderStyle: 'solid', borderColor:'#BCBCBC'}}
             className={"flex flex-row  bg-white"}>{columns.map((column)=>(
                 <BaseTableCell
                     color={isOnHover?'#ececec':'#ffffff'}
                     text={row[column.key]}
                     width={column.width} hoverable
                 />))}
        </div>
    )
}

interface BaseTableBodyProps{
    rows:BaseTableRow[]
    columns:BaseTableColumns[]
    height:number
}

export default function BaseTableBody({rows, columns,height}:BaseTableBodyProps){

    const {divBRef} = useScrollSync()

    return (
        <div style={{
            borderColor: '#BCBCBC',
            borderWidth: '0px 1px 0px 1px ',
            borderStyle: 'solid',
            height: height - 225,
            maxHeight: height - 225
        }} className={'w-full  overflow-y-auto'} ref={divBRef}>{
            rows.map(row => <BaseTableRow row={row} columns={columns}/>)
        }</div>
    )
}