import {actionsProduct} from '../actions/Product'

const innitialState = {
    data: [],
    err: '',
    loading: false
};

const products = (state = innitialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case actionsProduct.GET_PRODUCT:
            return {...state, loading: true}
        case actionsProduct.GET_PRODUCT_SUCCESS:
            return {...state, loading: false, data: payload}
        case actionsProduct.GET_PRODUCT_FAIL:
            return {...state, loading: false, data: payload}
            
        default:
            return state
    }
}

export default products;