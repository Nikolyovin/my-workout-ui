import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ILoginData } from '../../models/uiModels'

const IS_AUTH = 'isAuth'

interface InitialStateType {
    isAuth: boolean
    isLoading: boolean
    // errorLogin: string
}

const initialState: InitialStateType = {
    isAuth: JSON.parse(localStorage.getItem(IS_AUTH) ?? '[]'),
    isLoading: false
    // errorLogin: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
            localStorage.setItem(IS_AUTH, JSON.stringify(state.isAuth))
        },
        getLoginFetch(state, action: PayloadAction<ILoginData>) {
            state.isLoading = true
            console.log('slice')
        },
        getLoginSuccess(state) {
            state.isLoading = false
        }
    }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
