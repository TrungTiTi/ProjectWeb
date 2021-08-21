import { fork } from 'redux-saga/effects'
import product from './Product'
import phone from './Phone'
import userSaga from './User'
export default function* mySaga(){
    yield fork(userSaga)
    yield fork(product)
    yield fork(phone)
}