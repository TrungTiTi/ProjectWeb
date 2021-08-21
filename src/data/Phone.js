import axios from "axios";

const URL_API = 'https://60e12a096b689e001788cc72.mockapi.io/watchs';

const  getPhone = () => {
 
    return axios.get(`${URL_API}`).then( res => res.data)
 
}

const  getProductPhone = (number) => {

    return axios.get(`${URL_API}/?page=${number}&limit=6`).then( res => res.data)
    
}
export default {
    getPhone,
    getProductPhone
}