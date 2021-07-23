import {actionsPhone} from '../actions/Phone'

const innitialState = {
    data: [],
    err: '',
    loading: false
};

const phones = (state = innitialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case actionsPhone.GET_PHONE:
            return {...state, loading: true}
        case actionsPhone.GET_PHONE_SUCCESS:
            return {...state, loading: false, data: payload}
        case actionsPhone.GET_PHONE_FAIL:
            return {...state, loading: false, data: payload}

        default:
            return state
    }
}

export default phones;