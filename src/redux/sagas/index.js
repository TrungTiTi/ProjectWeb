import { fork } from 'redux-saga/effects'
import product from './Product'
import phone from './Phone'

export default function* mySaga(){
    yield fork(product)
    yield fork(phone)
}