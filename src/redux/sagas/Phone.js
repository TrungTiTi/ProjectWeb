import { call,fork,put,takeLatest } from "@redux-saga/core/effects";
import phoneApi from '../../data/Phone';
import { actionsPhone } from "../actions/Phone";

export function* fetchPhone() {
    try {
        const respo = yield call(phoneApi.getPhone)
        yield put({ type: actionsPhone.GET_PHONE_SUCCESS, payload: respo})

    } catch (error) {
        yield put({ type: actionsPhone.GET_PHONE_FAIL, payload: error})
    }
}

export function* watchFetchPhone() {
    yield takeLatest(actionsPhone.GET_PHONE, fetchPhone)
}

export default function* reward() {
    yield fork(watchFetchPhone)
}