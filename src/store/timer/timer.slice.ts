import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../helpers/constants'

interface InitialStateType {
    workTime: number
    breakTime: number
    statusTimer: STATUS.PAUSE | STATUS.PLAY | STATUS.STOP
    isRunSound: boolean
}

const initialState: InitialStateType = {
    workTime: 30,
    breakTime: 5,
    statusTimer: STATUS.STOP,
    isRunSound: false
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setWorkTime(state, action: PayloadAction<number>) {
            state.workTime = action.payload
            // localStorage.setItem(IS_AUTH, JSON.stringify(state.isAuth))
        },
        setBreakTime(state, action: PayloadAction<number>) {
            state.breakTime = action.payload
            // localStorage.setItem(IS_AUTH, JSON.stringify(state.isAuth))
        },
        setStatusTimer(state, action: PayloadAction<STATUS.PAUSE | STATUS.PLAY | STATUS.STOP>) {
            state.statusTimer = action.payload
        },
        setIsRunSound(state, action: PayloadAction<boolean>) {
            state.isRunSound = action.payload
        }
    }
})

export const timerActions = timerSlice.actions
export const timerReducer = timerSlice.reducer
