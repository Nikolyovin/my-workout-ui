import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TabsType } from '../../models/uiModels'
import { TABS } from '../../helpers/constants'

const ACTIVE_TAB = 'ACTIVE_TAB'

interface InitialStateType {
    // activeTab: TABS.TIMER | TABS.TRAINING | TABS.WEIGHT
    activeTab: string
}

const initialState: InitialStateType = {
    activeTab: JSON.parse(localStorage.getItem(ACTIVE_TAB) ?? '') || TABS.TIMER
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setActiveTab(state, action: PayloadAction<TabsType>) {
            state.activeTab = action.payload
            localStorage.setItem(ACTIVE_TAB, JSON.stringify(state.activeTab))
        }
    }
})

export const commonActions = commonSlice.actions
export const commonReducer = commonSlice.reducer
