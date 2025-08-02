import BaseContainSpacer from "../components/BaseContainSpacer";
import BaseButton from "../components/BaseButton.tsx";
import { FaFilter, FaSortAmountDownAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import BaseCanvas from "../components/BaseCanvas.tsx";

export default function DashboardPage() {
  return (
    <div className={"w-full h-full flex flex-col p-2 gap-2"}>
      <BaseContainSpacer>
        <BaseContainSpacer.Title title={"Dashboard"} />
        <BaseContainSpacer.Item>
          <BaseButton icon={<FaSortAmountDownAlt />} title={"Sort"} />
          <BaseButton icon={<FaFilter />} title={"Filter"} />
        </BaseContainSpacer.Item>
        <BaseContainSpacer.Item>
          <BaseButton icon={<IoSearch />} title={"Search"} />
        </BaseContainSpacer.Item>
      </BaseContainSpacer>
      <BaseCanvas />
    </div>
  );
}
