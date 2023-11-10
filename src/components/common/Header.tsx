import { useState } from 'react'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/action'

const Header = () => {
    const { isAuth } = useAppSelector(state => state.auth)
    console.log('isAuth', isAuth)

    const { logout } = useActions()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
        logout()
    }

    return (
        <div className=' py-4 px-5 flex justify-between items-center'>
            <p className='text-4xl  text-[#efefef]'>my-workout</p>
            {/* <div className='rounded-full bg-[#9e9e9e] w-[35px] h-[35px] flex justify-center items-center'>N</div> */}
            <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar sx={{ bgcolor: '#9e9e9e' }}>N</Avatar>
            </Button>

            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <MenuItem onClick={handleClose}>Выйти</MenuItem>
            </Menu>
        </div>
    )
}

export default Header
