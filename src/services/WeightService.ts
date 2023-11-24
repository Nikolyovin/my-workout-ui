import { URL_SERVER } from '../helpers/constants'
import {
    IWeightErrorResponse,
    IWeightResponse
} from '../models/apiModels'
import axios, { AxiosResponse } from 'axios'

export default class WeightService {
    static async getAll(): Promise<AxiosResponse<IWeightResponse[] | IWeightErrorResponse>> {
        try {
            const headers = { token: localStorage.getItem('jwt') }
            const response = await axios.get(`${URL_SERVER}weight`, { ...payload })
            return response
        } catch (e: any) {
            return e.response
        }
    }

}
