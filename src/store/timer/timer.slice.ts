import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../helpers/constants'

const WORK_TIME = 'WORK_TIME'
const BREAK_TIME = 'BREAK_TIME'

interface InitialStateType {
    workTime: number
    breakTime: number
    statusTimer: STATUS.PAUSE | STATUS.PLAY | STATUS.STOP
    isRunSound: boolean
}

const initialState: InitialStateType = {
    workTime: JSON.parse(localStorage.getItem(WORK_TIME) ?? '0'),
    breakTime: JSON.parse(localStorage.getItem(BREAK_TIME) ?? '0'),
    statusTimer: STATUS.STOP,
    isRunSound: false
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setWorkTime(state, action: PayloadAction<number>) {
            state.workTime = action.payload
            localStorage.setItem(WORK_TIME, JSON.stringify(state.workTime))
        },
        setBreakTime(state, action: PayloadAction<number>) {
            state.breakTime = action.payload
            localStorage.setItem(BREAK_TIME, JSON.stringify(state.breakTime))
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
