import axios from "axios";

const URL_API = 'http://localhost:8006';

const  getPhone = () => {
 
    return axios.get(`${URL_API}/watch`).then( res => res.data)
 
}

export default {getPhone}