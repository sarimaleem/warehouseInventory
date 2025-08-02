import { Outlet } from "react-router-dom";
import NavigationButton from "./NavigationButton.tsx";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdWarehouse } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { FaTruckFront } from "react-icons/fa6";
import { RiRobot2Fill } from "react-icons/ri";
import useTheme from "../hooks/useTheme.tsx";
import CoreView from "../assets/coreview.png";

export default function Navigation() {
  const { theme } = useTheme();

  return (
    <div
      className={"flex flex-row max-w-screen bg-[#F0F0F0] h-screen p-2 gap-2"}
    >
      <div className={"min-w-72 h-full flex flex-col"}>
        <div className={"w-full h-10 pl-4 my-3"}>
          <img
            src={CoreView}
            alt="CoreView"
            style={{ width: "auto", height: "100%" }}
          />
        </div>
        <div className={"p-2"}>
          <div className={"w-full h-[1px] bg-[#C6C6C6]"} />
        </div>
        <p className={"text-xs pl-2 text-[#6E6E6E]"}>menu</p>
        <NavigationButton
          icon={<HiMiniSquares2X2 />}
          to={"/dashboard"}
          title={"Dashboard"}
        />
        <NavigationButton
          icon={<FaBox />}
          to={"/inventory"}
          title={"Inventory"}
        />
        <NavigationButton
          icon={<MdWarehouse />}
          to={"/warehouse"}
          title={"Warehouse"}
        />
        <NavigationButton
          icon={<FaTruckFront />}
          to={"/shipments"}
          title={"Shipments"}
        />
        <NavigationButton
          icon={<RiRobot2Fill />}
          to={"/automations"}
          title={"Automations"}
        />
        <div className={"p-2"}>
          <div className={"w-full h-[1px] bg-[#C6C6C6]"} />
        </div>
      </div>
      <div
        className={`w-[calc(100vw-304px)] rounded flex flex-col`}
        style={{ backgroundColor: theme.main }}
      >
        <Outlet />
      </div>
    </div>
  );
}
