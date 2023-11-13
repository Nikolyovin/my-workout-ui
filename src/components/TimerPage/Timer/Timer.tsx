import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { COLORS } from '../../../helpers/constants'
import { Button, IconButton } from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import StopCircleIcon from '@mui/icons-material/StopCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import StopIcon from '@mui/icons-material/Stop'
import PauseIcon from '@mui/icons-material/Pause'
import { ButtonProps } from '@mui/material/Button'
import { grey } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
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
