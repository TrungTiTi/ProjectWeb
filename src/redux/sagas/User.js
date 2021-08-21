import { fork, put, takeLatest, call } from "redux-saga/effects";
import {userAction} from '../actions/User';
import { userApi } from '../../data/User';

export function* register(params) {
    try {
        const resp = yield call(() => userApi.addUser(params.payload))
        yield put({type: userAction.REGISTER_SUCCESS, payload: resp})
    } catch (error) {
        yield put({type: userAction.REGISTER_FAILTE, payload: error})
    }
}

export function* getUser() {
    try {
        const reps = yield call(userApi.getUser)
        yield put({type: userAction.GET_USER_SUCCESS, payload: reps})
    } catch (error) {
        yield put({type: userAction.GET_USER_FAILTE, payload: error})
    }
}

export function* watchRegister() {
    yield takeLatest(userAction.REGISTER, register)
}

export function* watchGetUser() {
    yield takeLatest(userAction.GET_USER, getUser)
}

export default function* reward() {
    yield fork(watchRegister)
    yield fork(watchGetUser)
}