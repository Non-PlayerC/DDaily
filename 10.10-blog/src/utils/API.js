import axios from 'axios'
const API = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 5000,
    headers: { "Content-type": "application/json;charset=UTF-8" }
})
export default API;
