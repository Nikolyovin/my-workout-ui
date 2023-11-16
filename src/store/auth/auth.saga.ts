import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { ILoginData, IRegistrationData } from '../../models/uiModels'
import {
    ILoginErrorResponse,
    ILoginResponse,
    IRegistrationErrorResponse,
    IRegistrationResponse
} from '../../models/apiModels'
import AuthService from '../../services/AuthService'
import { authActions } from './auth.slice'
import { ACTIVE_USER } from '../../helpers/constants'

function* workLoginFetch({ payload }: PayloadAction<ILoginData>): any {
    try {
        const authData: AxiosResponse<ILoginResponse | ILoginErrorResponse> = yield call(() =>
            AuthService.Login(payload)
        )
        if (authData && 'token' in authData.data) {
            localStorage.setItem('token', authData.data.token)
            localStorage.setItem(ACTIVE_USER, authData.data.user)

            yield put(authActions.setIsActiveUser(authData.data.user))
            yield put(authActions.loginSuccess())
        } else if ('message' in authData.data) {
            yield put(authActions.setErrorLogin(authData.data.message))
        }
    } catch (error) {
        throw error
    }
}

function* workRegistrationFetch({ payload }: PayloadAction<IRegistrationData>): any {
    try {
        const authData: AxiosResponse<IRegistrationResponse | IRegistrationErrorResponse> = yield call(() =>
            AuthService.registration(payload)
        )
        if (authData.status === 200) {
            if ('success' in authData.data) yield put(authActions.registrationSuccess(authData.data.success))
        } else if ('message' in authData.data) {
            let Error = authData.data.message
            authData.data.errors?.errors.map(item => (Error += ` ${item.msg}`))
            yield put(authActions.setErrorRegistration(Error))
        }
    } catch (error) {
        throw error
    }
}

function* authSaga() {
    yield takeLatest('auth/loginFetch', workLoginFetch)
    yield takeLatest('auth/registrationFetch', workRegistrationFetch)
}

export default authSaga
