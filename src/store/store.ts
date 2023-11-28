import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import { authReducer } from './auth/auth.slice'
import { timerReducer } from './timer/timer.slice'
import { commonReducer } from './common/common.slice'
import { weightReducer } from './weight/weight.slice'

const saga = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authReducer,
        timer: timerReducer,
        common: commonReducer,
        weight: weightReducer
    },
    middleware: [saga]
})

saga.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
