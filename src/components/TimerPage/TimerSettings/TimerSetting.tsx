import { FC, SetStateAction, Dispatch, useState } from 'react'
import { Button, Slider } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import { useActions } from '../../../hooks/action'
import { COLORS } from '../../../helpers/constants'
import { useAppSelector } from '../../../hooks/redux'

type propsType = {
    setIsShowSetting: Dispatch<SetStateAction<boolean>>
}

const TimerSetting: FC<propsType> = ({ setIsShowSetting }) => {
    // const [work, setWork] = useState(5)
    // const [timeBreak, setBreak] = useState(1)
    const { breakTime, workTime } = useAppSelector(state => state.timer)
    const { setBreakTime, setWorkTime } = useActions()

    const handleWorkChange = (_event: Event, newWork: number | number[]) => {
        setWorkTime(newWork as number)
    }

    const handleBreakChange = (_event: Event, newBreak: number | number[]) => {
        setBreakTime(newBreak as number)
    }
    return (
        <div className='px-10  flex flex-col items-center h-[calc(100dvh-50px-84px)]'>
            <div className='max-w-[90%]'>
                <label className='text-[#9e9e9e] text-lg '>
                    work minutes: <span className='text-2xl font-bold'>{workTime}</span>
                </label>
                <Slider
                    color='secondary'
                    value={typeof workTime === 'number' ? workTime : 0}
                    onChange={handleWorkChange}
                    aria-labelledby='input-slider'
                    max={300}
                    sx={{ height: 10 }}
                />
                <label className='text-[#9e9e9e] text-lg'>
                    break minutes: <span className='text-2xl font-bold'>{breakTime}</span>
                </label>
                <Slider
                    color='success'
                    value={typeof breakTime === 'number' ? breakTime : 0}
                    onChange={handleBreakChange}
                    aria-labelledby='input-slider'
                    max={120}
                    sx={{ height: 10 }}
                />
            </div>
            <div className='absolute bottom-[80px] '>
                <Button
                    size='medium'
                    sx={{ backgroundColor: COLORS.DARK_GREY }}
                    onClick={() => setIsShowSetting(false)}
                    // color='primary'
                    variant='contained'
                    startIcon={<SaveIcon sx={{ color: '#9e9e9e' }} fontSize='small' />}
                >
                    <span className='text-[#9e9e9e] text-xs'>Сохранить</span>
                </Button>
            </div>
        </div>
    )
}

export default TimerSetting
