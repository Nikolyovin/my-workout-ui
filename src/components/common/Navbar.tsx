import { IconButton } from '@mui/material'
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { COLORS, TABS } from '../../helpers/constants'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/action'

const Navbar = () => {
    // const [activeButton, setActiveButton] = useState<string>(ID.TIMER)
    const { activeTab } = useAppSelector(state => state.common)
    const { setActiveTab } = useActions()
    const isActiveButton: (id: string) => { color: string } = id =>
        activeTab === id ? { color: COLORS.BLUE } : { color: COLORS.GREY }

    const navigate = useNavigate()

    const onClickButton: (id: TABS.TIMER | TABS.TRAINING | TABS.WEIGHT) => void = id => {
        setActiveTab(id)
        navigate(id)
    }

    return (
        <div className='bg-gray-700 absolute bottom-0 w-full h-[50px] flex justify-evenly'>
            <IconButton id={TABS.TIMER} onClick={() => onClickButton(TABS.TIMER)} size='large'>
                <AccessTimeIcon fontSize='large' sx={isActiveButton(TABS.TIMER)} />
            </IconButton>
            <IconButton id={TABS.WEIGHT} onClick={() => onClickButton(TABS.WEIGHT)} size='large'>
                <MonitorWeightIcon fontSize='large' sx={isActiveButton(TABS.WEIGHT)} />
            </IconButton>
            <IconButton id={TABS.TRAINING} onClick={() => onClickButton(TABS.TRAINING)} size='large'>
                <FitnessCenterIcon fontSize='large' sx={isActiveButton(TABS.TRAINING)} />
            </IconButton>
        </div>
    )
}

export default Navbar
