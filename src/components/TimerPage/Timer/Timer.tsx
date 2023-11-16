import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { COLORS } from '../../../helpers/constants'
import { Dispatch, FC, SetStateAction } from 'react'
import TimerButtons from './TimerButtons/TimerButtons'

interface IProps {
    setIsShowSetting: Dispatch<SetStateAction<boolean>>
}

const Timer: FC<IProps> = ({ setIsShowSetting }) => {
    const RED = '#f54e4e'
    const GREEN = '#4aec8c'
    const percentage = 66

    return (
        <div className='px-10 py-14 h-[calc(100dvh-50px-84px)]'>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}`}
                styles={buildStyles({ textColor: 'white', pathColor: RED, trailColor: COLORS.GREY })}
            />
            <TimerButtons setIsShowSetting={setIsShowSetting} />
        </div>
    )
}

export default Timer
