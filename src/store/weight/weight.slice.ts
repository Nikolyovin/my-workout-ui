import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IWeightResponse } from '../../models/apiModels'

interface InitialStateType {
    weightMeasurement: IWeightResponse[]
    isLoading: boolean
}

const initialState: InitialStateType = {
    weightMeasurement: [],
    isLoading: false
}

export const weightSlice = createSlice({
    name: 'weight',
    initialState,
    reducers: {
        getWeightMeasurementFetch(state) {
            state.isLoading = true
        },
        getWeightMeasurementSuccess(state, action: PayloadAction<IWeightResponse[]>) {
            state.isLoading = false
            state.weightMeasurement = action.payload
        }
    }
})

export const weightActions = weightSlice.actions
export const weightReducer = weightSlice.reducer
