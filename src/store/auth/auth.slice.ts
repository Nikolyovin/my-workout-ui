import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ILoginData, IRegistrationData } from '../../models/uiModels'

const IS_AUTH = 'isAuth'
const ACTIVE_USER = 'ACTIVE_USER'

interface InitialStateType {
    isAuth: boolean
    isLoading: boolean
    errorLogin: string
    errorRegistration: string
    successRegistration: string
    activeUser: string
}

const initialState: InitialStateType = {
    isAuth: JSON.parse(localStorage.getItem(IS_AUTH) ?? '[]'),
    isLoading: false,
    errorLogin: '',
    errorRegistration: '',
    successRegistration: '',
    activeUser: JSON.parse(localStorage.getItem(ACTIVE_USER) ?? '[]')
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
            localStorage.setItem(IS_AUTH, JSON.stringify(state.isAuth))
        },
        loginFetch(state, _action: PayloadAction<ILoginData>) {
            state.isLoading = true
        },
        loginSuccess(state) {
            state.errorLogin = ''
            state.isLoading = false
            state.isAuth = true
            localStorage.setItem(IS_AUTH, JSON.stringify(true))
        },
        setErrorLogin(state, action: PayloadAction<string>) {
            state.errorLogin = action.payload
            state.isLoading = false
        },
        logout(state) {
            localStorage.removeItem('token')
            state.isAuth = false
            localStorage.setItem(IS_AUTH, JSON.stringify(false))
        },
        registrationFetch(state, _action: PayloadAction<IRegistrationData>) {
            state.isLoading = true
        },
        registrationSuccess(state, action: PayloadAction<string>) {
            state.isLoading = true
            state.successRegistration = action.payload
        },
        setErrorRegistration(state, action: PayloadAction<string>) {
            state.errorRegistration = action.payload
            state.isLoading = false
        },
        setSuccessRegistration(state, action: PayloadAction<string>) {
            state.successRegistration = action.payload
        }
    }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
