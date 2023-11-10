import { URL_SERVER } from '../helpers/constants'
import {
    ILoginErrorResponse,
    ILoginResponse,
    IRegistrationErrorResponse,
    IRegistrationResponse
} from '../models/apiModels'
import { ILoginData, IRegistrationData } from '../models/uiModels'
import axios, { AxiosResponse } from 'axios'

export default class AuthService {
    static async Login(payload: ILoginData): Promise<AxiosResponse<ILoginResponse | ILoginErrorResponse>> {
        try {
            const response = await axios.post(`${URL_SERVER}auth/login`, { ...payload })
            return response
        } catch (e: any) {
            return e.response
        }
    }

    static async registration(
        payload: IRegistrationData
    ): Promise<AxiosResponse<IRegistrationResponse | IRegistrationErrorResponse>> {
        try {
            const response = await axios.post(`${URL_SERVER}auth/registration`, { ...payload })
            return response
        } catch (e: any) {
            return e.response
        }
    }
}
