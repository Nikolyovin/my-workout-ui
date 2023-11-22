// import React from 'react'
import { IconButton } from '@mui/material'
import WightList from './WightList/WightList'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const WeightPage = () => {
    return (
        <div className='h-[calc(100dvh-50px-84px)] flex flex-col items-center'>
            <WightList />
            <div className='absolute bottom-[60px]'>
                <IconButton size='large'>
                    <AddCircleIcon color='primary' sx={{ fontSize: 65 }} />
                </IconButton>
            </div>
        </div>
    )
}

export default WeightPage
