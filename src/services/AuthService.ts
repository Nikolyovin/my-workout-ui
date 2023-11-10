import { URL_SERVER } from '../helpers/constants'
import { IErrorResponse, ILoginResponse } from '../models/apiModels'
import { ILoginData } from '../models/uiModels'
import axios, { AxiosResponse } from 'axios'

export default class AuthService {
    static async Login(payload: ILoginData): Promise<AxiosResponse<ILoginResponse | IErrorResponse>> {
        try {
            const response = await axios.post(`${URL_SERVER}auth/login`, { ...payload })
            return response
        } catch (e: any) {
            return e.response
        }
    }
}
