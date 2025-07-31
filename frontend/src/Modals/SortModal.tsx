import BaseButton from "../components/BaseButton.tsx";
import useModalControl from "../hooks/useModalControl.tsx";
import BaseContainSpacer from "../components/BaseContainSpacer.tsx";

export default function SortModal(){

    const {handleClose} = useModalControl()

    return(
        <div className={'w-[25rem] p-2'}>
            <BaseContainSpacer>
                <BaseContainSpacer.Item>
                    <BaseButton onClick={handleClose} title={'close'} icon={<></>} />
                </BaseContainSpacer.Item>
                <BaseContainSpacer.Item>
                    <BaseButton onClick={()=>console.log('apply')} title={'apply'} icon={<></>} />
                </BaseContainSpacer.Item>
            </BaseContainSpacer>
        </div>
    )
}