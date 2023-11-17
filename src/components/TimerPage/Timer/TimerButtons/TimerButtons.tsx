import { COLORS, STATUS } from '../../../../helpers/constants'
import { Button, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import StopIcon from '@mui/icons-material/Stop'
import PauseIcon from '@mui/icons-material/Pause'
import { useAppSelector } from '../../../../hooks/redux'
import { useActions } from '../../../../hooks/action'

interface IProps {
    setIsShowSetting: Dispatch<SetStateAction<boolean>>
    // modeRef: MutableRefObject<"work" | "break">
    statusTimerRef: MutableRefObject<STATUS.PAUSE | STATUS.PLAY | STATUS.STOP>
    // secondLeftRef: MutableRefObject<string>
}

const TimerButtons: FC<IProps> = ({ setIsShowSetting, statusTimerRef }) => {
    const { statusTimer } = useAppSelector(state => state.timer)
    const { setStatusTimer } = useActions()
    // const [statusTimer, setStatusTimer] = useState(STATUS.STOP)

    const handlePlay: () => void = () => {
        setStatusTimer(STATUS.PLAY)
        statusTimerRef.current = STATUS.PLAY
    }

    const handleStop: () => void = () => {
        setStatusTimer(STATUS.STOP)
        statusTimerRef.current = STATUS.STOP
    }

    const handlePause: () => void = () => {
        setStatusTimer(STATUS.PAUSE)
        statusTimerRef.current = STATUS.PAUSE
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='button-play_wrap mt-[35%] '>
                {statusTimer !== STATUS.PLAY && (
                    <IconButton
                        // disableRipple={false}
                        onClick={handlePlay}
                        size='large'
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
                    >
                        <StopIcon fontSize='large' sx={{ color: COLORS.DARK_GREY }} />
                    </IconButton>
                )}
            </div>
            <div className='absolute bottom-[80px]'>
                <Button
                    variant='contained'
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
