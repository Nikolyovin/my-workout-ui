import { useState } from 'react'
import { Box, IconButton, Modal } from '@mui/material'
import WightList from './WightList/WightList'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { COLORS } from '../../helpers/constants'
import WeightForm from './WeightForm/WeightForm'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: COLORS.GREY_NEW,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
}

const WeightPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)
    return (
        <div className='h-[calc(100dvh-50px-84px)] flex flex-col items-center'>
            <WightList />
            <Modal open={isOpen} onClose={handleClose}>
                <Box sx={style}>
                    <WeightForm />
                </Box>
            </Modal>
            <div className='absolute bottom-[60px]'>
                <IconButton onClick={handleOpen} size='large'>
                    <AddCircleIcon color='primary' sx={{ fontSize: 65 }} />
                </IconButton>
            </div>
        </div>
    )
}

export default WeightPage
