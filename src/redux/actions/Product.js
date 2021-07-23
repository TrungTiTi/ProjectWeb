
export const actionsProduct = Object.freeze({
    GET_PRODUCT: 'GET_PRODUCT',
    GET_PRODUCT_SUCCESS: 'GET_PRODUCT_SUCCESS',
    GET_PRODUCT_FAIL: 'GET_PRODUCT_FAIL',
    GET_PRODUCTWATCH: 'GET_PRODUCTWATCH',
    CREATE_PRODUCT: 'CREATE_PRODUCT'
})

const getProduct = () => ({
    type: actionsProduct.GET_PRODUCT
})

const createProduct = (params) => ({
    type:actionsProduct.CREATE_PRODUCT,
    payload: params
})

export default {
    getProduct,
    createProduct
}