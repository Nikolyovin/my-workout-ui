import axios, { InternalAxiosRequestConfig } from 'axios'
import { URL_SERVER } from '../helpers/constants'

const $api = axios.create({
    // withCredentials: true, //чтобы куки цеплялись автоматически
    baseURL: URL_SERVER
})

$api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api
