import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ILoginData } from '../../models/uiModels'

const IS_AUTH = 'isAuth'

interface InitialStateType {
    isAuth: boolean
    isLoading: boolean
    errorLogin: string
}

const initialState: InitialStateType = {
    isAuth: JSON.parse(localStorage.getItem(IS_AUTH) ?? '[]'),
    isLoading: false,
    errorLogin: ''
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
        registrationFetch(state) {
            state.isLoading = true
        },
        registrationSuccess(state) {
            state.isLoading = true
        }
    }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
