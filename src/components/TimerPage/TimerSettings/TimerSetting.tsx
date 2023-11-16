import { FC, SetStateAction, Dispatch, useState } from 'react'
import { Button, Slider } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import { useActions } from '../../../hooks/action'

type propsType = {
    setIsShowSetting: Dispatch<SetStateAction<boolean>>
}

const TimerSetting: FC<propsType> = ({ setIsShowSetting }) => {
    const [work, setWork] = useState(5)
    const [timeBreak, setBreak] = useState(1)
    const {} = useActions()

    const handleWorkChange = (_event: Event, newWork: number | number[]) => {
        setWork(newWork as number)
    }

    const handleBreakChange = (_event: Event, newBreak: number | number[]) => {
        setBreak(newBreak as number)
    }
    return (
        <div className='px-10 text-left flex flex-col items-center'>
            <div>
                <label className='text-[#9e9e9e] text-lg '>
                    work minutes: <span className='text-2xl font-bold'>{work}</span>
                </label>
                <Slider
                    color='secondary'
                    value={typeof work === 'number' ? work : 0}
                    onChange={handleWorkChange}
                    aria-labelledby='input-slider'
                    max={120}
                    sx={{ height: 10 }}
                />
                <label className='text-[#9e9e9e] text-lg'>
                    break minutes:<span className='text-2xl font-bold'>{timeBreak}</span>
                </label>
                <Slider
                    color='success'
                    value={typeof timeBreak === 'number' ? timeBreak : 0}
                    onChange={handleBreakChange}
                    aria-labelledby='input-slider'
                    max={30}
                    sx={{ height: 10 }}
                />
            </div>
            <div className='absolute bottom-20 left-auto '>
                <Button
                    onClick={() => setIsShowSetting(false)}
                    color='primary'
                    variant='contained'
                    startIcon={<SaveIcon />}
                >
                    Сохранить
                </Button>
            </div>
        </div>
    )
}

export default TimerSetting
