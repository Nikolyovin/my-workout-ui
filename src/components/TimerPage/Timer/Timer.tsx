import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { COLORS, STATUS } from '../../../helpers/constants'
import { Dispatch, FC, SetStateAction } from 'react'
import TimerButtons from './TimerButtons/TimerButtons'
import { useState, useEffect, useRef } from 'react'
import { useAppSelector } from '../../../hooks/redux'

interface IProps {
    setIsShowSetting: Dispatch<SetStateAction<boolean>>
}

const Timer: FC<IProps> = ({ setIsShowSetting }) => {
    const purple = '#d500f9'
    const GREEN = '#4aec8c'
    const { breakTime, workTime, statusTimer } = useAppSelector(state => state.timer)
    const [secondsLeft, setSecondsLeft] = useState(0)
    const [mode, setMode] = useState<'work' | 'break'>('work')

    //нужно для сетинтервала, ему нужны ссылки
    const secondLeftRef = useRef(secondsLeft)
    const statusTimerRef = useRef(statusTimer)
    const modeRef = useRef(mode)
    console.log('statusTimerRef', statusTimerRef.current)

    const initTimer = () => {
        // setSecondsLeft(workTime * 60)
        // secondLeftRef.current = workTime * 60
        secondLeftRef.current = workTime
        setSecondsLeft(secondLeftRef.current)
    }

    //если один режим кончился, то переключает на другой
    const switchMode = () => {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work'
        const nextSeconds = nextMode === 'work' ? workTime : breakTime
        // const nextSeconds = (nextMode === 'work' ? workTime : breakTime) * 60
        setMode(nextMode)
        modeRef.current = nextMode
        setSecondsLeft(nextSeconds)
        secondLeftRef.current = nextSeconds
    }

    const tick = () => {
        secondLeftRef.current-- // secondsLeft -1
        setSecondsLeft(secondLeftRef.current)
    }

    useEffect(() => {
        initTimer()

        const interval = setInterval(() => {
            // if (statusTimerRef.current === STATUS.STOP) {
            //     initTimer()
            //     return
            // }
            if (statusTimerRef.current !== STATUS.PLAY) {
                return
            }
            if (secondLeftRef.current === 0) {
                //если время кончилось, то переключаем режим
                return switchMode()
            }

            tick()
        }, 1000)

        return () => clearInterval(interval) //очищаем интервал при размонтировании
    }, [statusTimer === STATUS.STOP])

    const totalSeconds = mode === 'work' ? workTime : breakTime
    // const totalSeconds = mode === 'work' ? workTime * 60 : breakTime * 60
    const percentage = Math.round((secondsLeft / totalSeconds) * 100)
    // const minutes = Math.floor(secondsLeft)
    // const minutes = Math.floor(secondsLeft / 60)
    let seconds = secondsLeft.toString()
    // let seconds = (secondsLeft % 60).toString()
    if (+seconds < 10) seconds = '0' + seconds

    return (
        <div className='px-10 py-14 h-[calc(100dvh-50px-84px)]'>
            <CircularProgressbar
                value={percentage}
                text={`${seconds}`}
                // text={`${minutes}:${seconds}`}
                styles={buildStyles({
                    textColor: 'white',
                    pathColor: mode === 'work' ? purple : GREEN,
                    trailColor: COLORS.GREY
                })}
            />
            <TimerButtons statusTimerRef={statusTimerRef} setIsShowSetting={setIsShowSetting} />
        </div>
    )
}

export default Timer