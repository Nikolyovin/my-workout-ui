import { COLORS } from '../../../../helpers/constants'
import { Button, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import StopIcon from '@mui/icons-material/Stop'
import PauseIcon from '@mui/icons-material/Pause'

interface IProps {
    setIsShowSetting: Dispatch<SetStateAction<boolean>>
}

const TimerButtons: FC<IProps> = ({ setIsShowSetting }) => {
    enum STATUS {
        PLAY = 'PLAY',
        STOP = 'STOP',
        PAUSE = 'PAUSE'
    }
    const [statusTimer, setStatusTimer] = useState(STATUS.STOP)

    const handlePlay: () => void = () => {
        setStatusTimer(STATUS.PLAY)
    }

    const handleStop: () => void = () => {
        setStatusTimer(STATUS.STOP)
    }

    const handlePause: () => void = () => {
        setStatusTimer(STATUS.PAUSE)
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='button-play_wrap mt-[35%] '>
                {statusTimer !== STATUS.PLAY && (
                    <IconButton
                        // disableRipple={false}
                        onClick={handlePlay}
                        size='large'
                        color='secondary'
                        sx={{ background: COLORS.GREY }}
                    >
                        <PlayArrowIcon fontSize='large' sx={{ color: COLORS.DARK_GREY }} />
                    </IconButton>
                )}

                {statusTimer === STATUS.PLAY && (
                    <IconButton
                        // disableRipple={false}
                        onClick={handlePause}
                        size='large'
                        color='success'
                        sx={{ background: COLORS.GREY }}
                    >
                        <PauseIcon fontSize='large' sx={{ color: COLORS.DARK_GREY }} />
                    </IconButton>
                )}

                {statusTimer !== STATUS.STOP && (
                    <IconButton
                        // disableRipple={false}
                        onClick={handleStop}
                        size='large'
                        sx={{ background: COLORS.GREY, ml: '20px' }}
                        color='primary'
                    >
                        <StopIcon fontSize='large' sx={{ color: COLORS.DARK_GREY }} />
                    </IconButton>
                )}
            </div>
            <div className='absolute bottom-[75px]'>
                <Button
                    size='medium'
                    sx={{ backgroundColor: COLORS.DARK_GREY }}
                    onClick={() => setIsShowSetting(true)}
                    startIcon={<SettingsIcon sx={{ color: '#9e9e9e' }} fontSize='small' />}
                >
                    <span className='text-[#9e9e9e] text-xs'>Настройки</span>
                </Button>
            </div>
        </div>
    )
}

export default TimerButtons
