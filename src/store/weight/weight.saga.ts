import { AxiosResponse } from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { IWeightErrorResponse, IWeightResponse } from '../../models/apiModels'
import WeightService from '../../services/WeightService'
import { weightActions } from './weight.slice'
import { authActions } from '../auth/auth.slice'
// import { AxiosResponse } from 'axios'
// import { IBrand } from '../../../models/apiModels'
// import BrandService from '../../../services/BrandService'
// import { loginActions } from '../../login/login.slice'
// import { brandsActions } from './brands.slice'

function* getWeightMeasurement(): any {
    try {
        const response: AxiosResponse<IWeightResponse[] | IWeightErrorResponse> = yield call(() =>
            WeightService.getAll()
        )
        switch (response.status) {
            case 200:
                return yield put(weightActions.getWeightMeasurementSuccess(response.data as IWeightResponse[]))
            case 403:
                return yield put(authActions.logout())
        }

        // response.status === 400
        //     ? yield put(loginActions.logout())
        //     : yield put(brandsActions.getBrandsSuccess(response.data as IBrand[]))
        // response.data === NOT_AUTHORIZED
        //     ? yield put(loginActions.logout())
        //     : yield put(orderPageActions.getBrandsSuccess(response.data as IBrand[]))
    } catch (error) {
        throw error
    }
}

function* BrandsSaga() {
    yield takeEvery('weight/getWeightMeasurementFetch', getWeightMeasurement)
}

export default BrandsSaga
