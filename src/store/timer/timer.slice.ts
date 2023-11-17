import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../helpers/constants'

interface InitialStateType {
    workTime: number
    breakTime: number
    statusTimer: STATUS.PAUSE | STATUS.PLAY | STATUS.STOP
}

const initialState: InitialStateType = {
    workTime: 60,
    breakTime: 30,
    statusTimer: STATUS.STOP
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
        }
    }
})

export const timerActions = timerSlice.actions
export const timerReducer = timerSlice.reducer
