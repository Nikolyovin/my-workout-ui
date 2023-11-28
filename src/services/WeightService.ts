import { URL_SERVER } from '../helpers/constants'
import $api from '../http'
import { IWeightErrorResponse, IWeightResponse } from '../models/apiModels'
import { AxiosResponse } from 'axios'

export default class WeightService {
    static async getAll(): Promise<AxiosResponse<IWeightResponse[] | IWeightErrorResponse>> {
        try {
            // const headers = { token: localStorage.getItem('jwt') }
            const response = await $api.get(`${URL_SERVER}weight`)
            return response
        } catch (e: any) {
            return e.response
        }
    }
}
