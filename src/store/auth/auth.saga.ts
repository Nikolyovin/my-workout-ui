import { call, put, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { ILoginData } from '../../models/uiModels'
import { IErrorResponse, ILoginResponse } from '../../models/apiModels'
import AuthService from '../../services/AuthService'

function* workLoginFetch({ payload }: PayloadAction<ILoginData>): any {
    try {
        console.log('saga')
        const authData: AxiosResponse<ILoginResponse | IErrorResponse> = yield call(() => AuthService.Login(payload))
        console.log('authData', authData)
        // if (authData && 'jwt' in authData.data) {
        //     localStorage.setItem('jwt', authData.data.jwt)
        //     yield put(loginActions.getAuthSuccess())
        // } else if ('detail' in authData.data) {
        //     yield put(loginActions.setErrorLogin(authData.data.detail))
        // }
    } catch (error) {
        throw error
    }
}

function* authSaga() {
    yield takeEvery('auth/getLoginFetch', workLoginFetch)
}

export default authSaga
