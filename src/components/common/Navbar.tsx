import { IconButton } from '@mui/material'
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { useState } from 'react'
import { COLORS } from '../../helpers/constants'

const Navbar = () => {
    enum ID {
        TIMER = 'TIMER',
        WEIGHT = 'WEIGHT',
        FITNESS = 'FITNESS'
    }
    const [activeButton, setActiveButton] = useState<string>(ID.TIMER)
    const isActiveButton: (id: string) => { color: string } = id =>
        activeButton === id ? { color: COLORS.BLUE } : { color: COLORS.GREY }

    return (
        <div className='bg-gray-700 absolute bottom-0 w-full h-[50px] flex justify-evenly'>
            <IconButton id={ID.TIMER} onClick={() => setActiveButton(ID.TIMER)} size='large'>
                <AccessTimeIcon fontSize='large' sx={isActiveButton(ID.TIMER)} />
            </IconButton>
            <IconButton id={ID.WEIGHT} onClick={() => setActiveButton(ID.WEIGHT)} size='large'>
                <MonitorWeightIcon fontSize='large' sx={isActiveButton(ID.WEIGHT)} />
            </IconButton>
            <IconButton id={ID.FITNESS} onClick={() => setActiveButton(ID.FITNESS)} size='large'>
                <FitnessCenterIcon fontSize='large' sx={isActiveButton(ID.FITNESS)} />
            </IconButton>
        </div>
    )
}

export default Navbar
