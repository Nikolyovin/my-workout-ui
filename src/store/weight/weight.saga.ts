import { AxiosResponse } from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { IWeightErrorResponse, IWeightResponse } from '../../models/apiModels'
// import { AxiosResponse } from 'axios'
// import { IBrand } from '../../../models/apiModels'
// import BrandService from '../../../services/BrandService'
// import { loginActions } from '../../login/login.slice'
// import { brandsActions } from './brands.slice'

function* getWeightMeasurement(): any {
    try {
        const response: AxiosResponse<IWeightResponse[] | IWeightErrorResponse> = yield call(() =>
            BrandService.getAll()
        )
        response.status === 400
            ? yield put(loginActions.logout())
            : yield put(brandsActions.getBrandsSuccess(response.data as IBrand[]))
        // response.data === NOT_AUTHORIZED
        //     ? yield put(loginActions.logout())
        //     : yield put(orderPageActions.getBrandsSuccess(response.data as IBrand[]))
    } catch (error) {
        throw error
    }
}

function* BrandsSaga() {
    yield takeEvery('brands/getBrandsFetch', getWeightMeasurement)
}

export default BrandsSaga
