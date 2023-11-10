import Input from '../../common/Input'
import Button from '@mui/material/Button'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import { useActions } from '../../../hooks/action'
import { useAppSelector } from '../../../hooks/redux'

const RegistrationForm = () => {
    const [login, setLogin] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [confirmPass, setConfirmPass] = useState<string>('')
    const [isResetForm, setIsResetForm] = useState<boolean>(false)
    const navigate = useNavigate()
    const { errorRegistration, successRegistration } = useAppSelector(state => state.auth)
    const { registrationFetch, setErrorRegistration, setSuccessRegistration } = useActions()

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (login && pass && confirmPass === pass) {
            setLogin('')
            setPass('')
            setConfirmPass('')
            setIsResetForm(false)
            registrationFetch({ username: login, password: pass })
        } else {
            setIsResetForm(true)
        }
    }

    const pushToRegistration: () => void = () => {
        setSuccessRegistration('')
        navigate('/login')
    }

    return (
        <form
            onClick={() => setErrorRegistration('')}
            onSubmit={handleFormSubmit}
            className='p-[32px] bg-[#616161] rounded-lg w-[300px] flex flex-col'
        >
            <h1 className='text-2xl text-center mb-5'>Регистрация</h1>
            {errorRegistration && <span className='text-sm text-center text-red-600'>{errorRegistration}</span>}
            {successRegistration && (
                <>
                    <span className='text-sm text-center text-green-600'>{successRegistration}</span>{' '}
                    <CheckCircleIcon color='success' fontSize='large' sx={{ mb: '5px', mx: 'auto' }} />
                </>
            )}
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
            <div className={confirmPass ? 'flex h-full' : ''}>
                <Input
                    isResetForm={isResetForm}
                    setIsResetForm={setIsResetForm}
                    setValue={setConfirmPass}
                    type='password'
                    placeholder='Подтвердите пароль'
                    value={confirmPass}
                />
                {pass === confirmPass
                    ? confirmPass && <CheckCircleIcon color='success' fontSize='large' sx={{ mt: '1px', ml: '3px' }} />
                    : confirmPass && <CancelIcon color='error' fontSize='large' sx={{ mt: '1px', ml: '3px' }} />}
            </div>

            <Button
                type='submit'
                // onClick={() => clickHendler()}
                variant='contained'
                sx={{ fontFamily: 'inherit', mb: '10px' }}
            >
                Регистрация
            </Button>
            <Button onClick={pushToRegistration} size='small' variant='text' sx={{ fontFamily: 'inherit', mb: '10px' }}>
                Вход
            </Button>
        </form>
    )
}

export default RegistrationForm
