
export const actionsPhone = Object.freeze({
    GET_PHONE: 'GET_PHONE',
    GET_PHONE_SUCCESS: 'GET_PHONE_SUCCESS',
    GET_PHONE_FAIL: 'GET_PHONE_FAIL',
    CREATE_PHONE: 'CREATE_PHONE'
})

const getPhone = () => ({
    type: actionsPhone.GET_PHONE
})

const createPhone = (params) => ({
    type:actionsPhone.CREATE_PHONE,
    payload: params
})

export default {
    getPhone,
    createPhone
}