import {combineReducers} from 'redux';
import products from './Product';
import phones from './Phone';

const rootReducer = combineReducers({
    products,
    phones
})

export default rootReducer;