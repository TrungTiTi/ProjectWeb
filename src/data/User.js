// dungf axios viet common
import axios  from "axios"

const API_REAL = 'https://60e12a096b689e001788cc72.mockapi.io'
const getUser = () => {
    return axios.get(`${API_REAL}/User`).then(result => {
        if (result.status === 200) {
           
            return result.data
        }
    }).catch()
}

const addUser = (params) => {
   
    return axios.post(`${API_REAL}/User`, params).then(result => {
       
    })
}

export const userApi = {
    getUser,
    addUser
}