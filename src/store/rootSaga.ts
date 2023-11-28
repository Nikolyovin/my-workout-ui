import { spawn } from 'redux-saga/effects'
import authSaga from './auth/auth.saga'
import weightSaga from './weight/weight.saga'

export default function* rootSaga() {
    yield spawn(authSaga)
    yield spawn(weightSaga)
}
