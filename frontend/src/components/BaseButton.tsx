import {type MouseEvent, type ReactNode, useState} from "react";
import useTheme from "../hooks/useTheme.tsx";
import BaseModal from "./BaseModal.tsx";
import {ModalControlProvider} from "../context/ModalControlProvider.tsx";

type Ripple = {
    id: number
    x: number
    y: number
}

interface BaseButtonProps {
    title:string
    icon?:ReactNode
    onClick?:()=>void
    modal?:ReactNode
    closeable?: true
}

export default function BaseButton({title,icon, onClick, modal, closeable}:BaseButtonProps) {

    const {theme} = useTheme()
    const [ripples, setRipples] = useState<Ripple[]>([])
    const [nextId, setNextId] = useState(0)

    const createRipple = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const newRipple: Ripple = { id: nextId, x, y }
        setRipples((prev) => [...prev, newRipple])
        setNextId((id) => id + 1)

        // Remove ripple after animation
        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
        }, 1000)
    }

    const [showModal, setShowModal] = useState<boolean>(false)

    const handleClick = () =>{
        if(onClick !== undefined) onClick()
        setShowModal(true)
    }

    return(
        <ModalControlProvider doClose={()=>setShowModal(false)}>
            <button onClick={handleClick}>
                {showModal && (modal !== undefined) && <BaseModal
                    element={modal}
                    closeModal={() => setShowModal(false)}
                    closeable={closeable}
                />}
                <div className={'cursor-default select-none'}>
                    <div onClick={createRipple} style={{
                        backgroundColor: theme.main,
                        borderStyle: 'solid',
                        borderColor: theme.focusButtonOutline,
                        borderWidth: '1px',
                        color: theme.focusText,
                        borderRadius: 5,
                    }} className={'p-3 text-sm flex flex-row overflow-hidden relative'}>
                        {ripples.map((ripple) => (
                            <span
                                key={ripple.id}
                                className="absolute rounded-full opacity-20 pointer-events-none animate-ripple"
                                style={{
                                    left: ripple.x,
                                    top: ripple.y,
                                    width: 20,
                                    height: 20,
                                    backgroundColor: theme.focusText,
                                    transform: 'translate(-50%, -50%)',
                                }}
                            />
                        ))}
                        { icon && <div className={' grid content-center mr-1'}>
                            {icon}
                        </div>}
                        <p>{title}</p>
                    </div>
                </div>
            </button>
        </ModalControlProvider>
    )
}