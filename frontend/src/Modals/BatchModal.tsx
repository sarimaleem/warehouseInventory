import BaseButton from "../components/BaseButton.tsx";
import useModalControl from "../hooks/useModalControl.tsx";
import BaseContainSpacer from "../components/BaseContainSpacer.tsx";

export default function BatchModal(){

    const {handleClose} = useModalControl()

    return(
        <div className={'w-[25rem] p-2'}>
            <BaseContainSpacer>
                <BaseContainSpacer.Item>
                    <BaseButton onClick={handleClose} title={'close'}/>
                </BaseContainSpacer.Item>
                <BaseContainSpacer.Item>
                    <BaseButton onClick={()=>console.log('apply')} title={'apply'}/>
                </BaseContainSpacer.Item>
            </BaseContainSpacer>
        </div>
    )
}