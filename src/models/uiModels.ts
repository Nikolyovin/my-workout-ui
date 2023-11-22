import { TABS } from '../helpers/constants'

export interface ILoginData {
    username: string
    password: string
}

export interface IRegistrationData {
    username: string
    password: string
}

export type TabsType = TABS.TIMER | TABS.TRAINING | TABS.WEIGHT
