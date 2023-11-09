import Input from '../../common/Input'
import Button from '@mui/material/Button'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../../hooks/action'

const LoginForm = () => {
    const [login, setLogin] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [isResetForm, setIsResetForm] = useState<boolean>(false)
    const navigate = useNavigate()
    const { getLoginFetch } = useActions()

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (login && pass) {
            setLogin('')
            setPass('')
            setIsResetForm(false)
            getLoginFetch({ login, password: pass })
            // console.log(login, pass)
        } else {
            setIsResetForm(true)
        }
    }

    const pushToRegistration: () => void = () => {
        navigate('/registration')
    }

    return (
        <form onSubmit={handleFormSubmit} className='p-[32px] bg-[#616161] rounded-lg w-[300px] flex flex-col'>
            <h1 className='text-2xl text-center mb-5'>Войти</h1>

            <Input
                isResetForm={isResetForm}
                setIsResetForm={setIsResetForm}
                setValue={setLogin}
                type='text'
                placeholder='Логин'
                value={login}
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
            <Button onClick={pushToRegistration} size='small' variant='text' sx={{ fontFamily: 'inherit', mb: '10px' }}>
                Регистрация
            </Button>
        </form>
    )
}

export default LoginForm
