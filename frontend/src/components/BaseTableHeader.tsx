import { BaseTableCell, type BaseTableColumns } from "./BaseTable.tsx";
import useScrollSync from "../hooks/useScrollSync.tsx";

interface BaseTableHeaderProps {
  columns: BaseTableColumns[];
}

export default function BaseTableHeader({ columns }: BaseTableHeaderProps) {
  const { divARef } = useScrollSync();

  return (
    <div
      style={{
        borderColor: "#BCBCBC",
        borderWidth: "1px 1px 0px 1px ",
        borderStyle: "solid",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
      }}
      className={
        "flex w-full flex-col overflow-scroll whitespace-nowrap rounded-t-lg"
      }
      ref={divARef}
    >
      <div
        style={{
          color: "#9B9B9B",
          backgroundColor: "#F5F5F5",
          borderRadius: `10px 10px 0px 0px`,
          borderWidth: `0px 1px 0px 0px`,
          borderStyle: "solid",
          borderColor: "#BCBCBC",
        }}
        className={"flex flex-row w-full  "}
      >
        {columns.map((column) => (
          <BaseTableCell
            color={"#F5F5F5"}
            text={column.name}
            width={column.width}
          />
        ))}
      </div>
    </div>
  );
}
