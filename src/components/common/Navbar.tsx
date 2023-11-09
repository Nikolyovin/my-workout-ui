import { IconButton } from '@mui/material'
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { useState } from 'react'
import { COLORS } from '../../helpers/constants'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    enum ID {
        TIMER = 'timer',
        WEIGHT = 'weight',
        TRAINING = 'training'
    }
    const [activeButton, setActiveButton] = useState<string>(ID.TIMER)
    const isActiveButton: (id: string) => { color: string } = id =>
        activeButton === id ? { color: COLORS.BLUE } : { color: COLORS.GREY }

    const navigate = useNavigate()

    const onClickButton: (id: string) => void = id => {
        setActiveButton(id)
        navigate(id)
    }

    return (
        <div className='bg-gray-700 absolute bottom-0 w-full h-[50px] flex justify-evenly'>
            <IconButton id={ID.TIMER} onClick={() => onClickButton(ID.TIMER)} size='large'>
                <AccessTimeIcon fontSize='large' sx={isActiveButton(ID.TIMER)} />
            </IconButton>
            <IconButton id={ID.WEIGHT} onClick={() => onClickButton(ID.WEIGHT)} size='large'>
                <MonitorWeightIcon fontSize='large' sx={isActiveButton(ID.WEIGHT)} />
            </IconButton>
            <IconButton id={ID.TRAINING} onClick={() => onClickButton(ID.TRAINING)} size='large'>
                <FitnessCenterIcon fontSize='large' sx={isActiveButton(ID.TRAINING)} />
            </IconButton>
        </div>
    )
}

export default Navbar
