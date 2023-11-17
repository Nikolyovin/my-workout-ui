import { useRef, useEffect, FC } from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

type propsType = {
    setIsRunSound: ActionCreatorWithPayload<boolean>
}

const TimerSound: FC<propsType> = ({ setIsRunSound }) => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const src = 'public/bell.mp3'
    const { isRunSound } = useAppSelector(state => state.timer)

    const playSound = () => audioRef.current && audioRef.current.play()

    useEffect(() => {
        if (isRunSound) {
            playSound()
            setIsRunSound(false)
        }
    }, [isRunSound])

    return (
        <div>
            <audio ref={audioRef} src={src} />
            {/* <button style={{ background: 'white' }} onClick={playSound}>
                Воспроизвести звук
            </button> */}
        </div>
    )
}

export default TimerSound
