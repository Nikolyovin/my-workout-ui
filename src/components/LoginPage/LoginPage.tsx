// import React from 'react'
import { Button } from '@mui/material'
import Input from '../common/Input'
import { FormEvent, useState } from 'react'
import { useActions } from '../../hooks/action'
// import { ChangeEvent } from 'react'

const LoginPage = () => {
    const { setIsAuth } = useActions()
    const [text, setText] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [isResetForm, setIsResetForm] = useState<boolean>(false)

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text && pass) {
            setText('')
            setPass('')
            setIsResetForm(false)
            console.log(text, pass)
        } else {
            setIsResetForm(true)
        }
    }
    return (
        <div className='flex h-[100dvh] items-center justify-center'>
            <form onSubmit={handleFormSubmit} className='p-[32px] bg-[#616161] rounded-lg w-[300px] flex flex-col'>
                <h1 className='text-2xl text-center mb-5'>Войти</h1>

                <Input
                    isResetForm={isResetForm}
                    setIsResetForm={setIsResetForm}
                    setValue={setText}
                    type='text'
                    placeholder='Логин'
                    value={text}
                />
                <Input
                    isResetForm={isResetForm}
                    setIsResetForm={setIsResetForm}
                    setValue={setPass}
                    type='password'
                    placeholder='Пароль'
                    value={pass}
                />
                <Button
                    type='submit'
                    // onClick={() => clickHendler()}
                    variant='contained'
                    sx={{ fontFamily: 'inherit', mb: '10px' }}
                >
                    Вход
                </Button>
            </form>
        </div>
    )
}

export default LoginPage
