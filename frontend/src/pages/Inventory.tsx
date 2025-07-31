import BaseButton from "../components/BaseButton.tsx";
import { FaSortAmountDownAlt} from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import BaseContainSpacer from "../components/BaseContainSpacer.tsx";
import { IoSearch } from "react-icons/io5";
import SortModal from "../Modals/SortModal.tsx";
import BatchModal from "../Modals/BatchModal.tsx";
import InventoryTable from "../Tables/InventoryTable.tsx";

export default function InventoryPage() {

    return (
        <div  className={'w-full h-full flex flex-col p-2 gap-2'}>
            <BaseContainSpacer>
                <BaseContainSpacer.Title title={'Inventory'} />
                <BaseContainSpacer.Item>
                    <BaseButton icon={<FaSortAmountDownAlt/>} title={'Sort/Filter'} modal={<SortModal/>}/>
                    <BaseButton icon={<FaBolt />} title={'Batch'} modal={<BatchModal/>}/>
                </BaseContainSpacer.Item>
                <BaseContainSpacer.Item>
                    <BaseButton icon={<IoSearch />} title={'Search'}/>
                </BaseContainSpacer.Item>
            </BaseContainSpacer>
            <InventoryTable/>
        </div>
    )
}