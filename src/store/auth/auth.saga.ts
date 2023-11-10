import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { ILoginData } from '../../models/uiModels'
import { IErrorResponse, ILoginResponse } from '../../models/apiModels'
import AuthService from '../../services/AuthService'
import { authActions } from './auth.slice'

function* workLoginFetch({ payload }: PayloadAction<ILoginData>): any {
    try {
        const authData: AxiosResponse<ILoginResponse | IErrorResponse> = yield call(() => AuthService.Login(payload))
        console.log('authData', authData)
        if (authData && 'token' in authData.data) {
            localStorage.setItem('token', authData.data.token)
            yield put(authActions.loginSuccess())
        } else if ('message' in authData.data) {
            yield put(authActions.setErrorLogin(authData.data.message))
        }
    } catch (error) {
        throw error
    }
}

function* authSaga() {
    yield takeLatest('auth/loginFetch', workLoginFetch)
    yield takeLatest('auth/loginFetch', workLoginFetch)
}

export default authSaga
