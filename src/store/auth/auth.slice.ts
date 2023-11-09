import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const IS_AUTH = 'isAuth'

interface InitialStateType {
    isAuth: boolean
    // isLoading: boolean
    // errorLogin: string
}

const initialState: InitialStateType = {
    isAuth: JSON.parse(localStorage.getItem(IS_AUTH) ?? '[]')
    // isLoading: false,
    // errorLogin: ''
}

export const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
            localStorage.setItem(IS_AUTH, JSON.stringify(state.isAuth))
        }
    }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
