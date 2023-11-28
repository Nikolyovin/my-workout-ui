export interface ILoginResponse {
    token: string
    user: string
}

export interface ILoginErrorResponse {
    message: string
}

export interface IRegistrationResponse {
    success: string
}

export interface IError {
    type: string
    value: string
    msg: string
    path: string
    location: string
}

export interface IErrorsValidation {
    errors: IError[]
}

export interface IRegistrationErrorResponse {
    message: string
    errors?: IErrorsValidation
}

export interface IWeightResponse {
    _id: string
    weight: number
    date: Date
}

export interface IWeightErrorResponse {
    message: string
}
