import {combineReducers} from 'redux';
import products from './Product';
import phones from './Phone';
import user from './User';

const rootReducer = combineReducers({
    user,
    products,
    phones
})

export default rootReducer;