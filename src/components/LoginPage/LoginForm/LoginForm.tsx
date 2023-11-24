import Input from '../../common/Input'
import Button from '@mui/material/Button'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../../hooks/action'
import { useAppSelector } from '../../../hooks/redux'
import { CircularProgress } from '@mui/material'

const LoginForm = () => {
    const [login, setLogin] = useState<string | number>('')
    const [pass, setPass] = useState<string | number>('')
    const [isResetForm, setIsResetForm] = useState<boolean>(false)
    const { errorLogin, isLoading } = useAppSelector(state => state.auth)
    const navigate = useNavigate()
    const { loginFetch, setErrorLogin } = useActions()

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (login && pass) {
            setLogin('')
            setPass('')
            setIsResetForm(false)
            loginFetch({ username: login as string, password: pass as string })
        } else {
            setIsResetForm(true)
        }
    }

    const pushToRegistration: () => void = () => {
        navigate('/registration')
    }

    return (
        <form
            onClick={() => setErrorLogin('')}
            onSubmit={handleFormSubmit}
            className='p-[32px] bg-[#616161] rounded-lg w-[300px] flex flex-col'
        >
            <h1 className='text-2xl text-center mb-5'>Войти</h1>
            {errorLogin && <span className='text-red-600 text-center text-sm'>{errorLogin}</span>}

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
            {!isLoading ? (
                <Button type='submit' variant='contained' sx={{ fontFamily: 'inherit', mb: '10px' }}>
                    Вход
                </Button>
            ) : (
                <div className='flex justify-center'>
                    <CircularProgress />
                </div>
            )}
            {/* <LoadingButton size='small' loading={isLoading} variant='outlined'>
                Вход
            </LoadingButton> */}
            {!isLoading && (
                <Button
                    onClick={pushToRegistration}
                    size='small'
                    variant='text'
                    sx={{ fontFamily: 'inherit', mb: '10px' }}
                >
                    Регистрация
                </Button>
            )}
        </form>
    )
}

export default LoginForm
