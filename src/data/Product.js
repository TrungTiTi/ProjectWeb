import axios from "axios";

const URL_API = 'http://localhost:8006/posts';

const  getProduct = () => {

    return axios.get(`${URL_API}`).then( res => res.data)
    
}

const  getProductWatch = (number) => {

    return axios.get(`${URL_API}/?_page=${number}&_limit=6`).then( res => res.data)
    
}
export default {
    getProduct,
    getProductWatch
}
