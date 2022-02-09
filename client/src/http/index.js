import axios from "axios";
export const REACT_APP_API_URL='http://localhost:5001/'
const $host = axios.create({
    baseURL:REACT_APP_API_URL
})
const $authHost = axios.create({
    baseURL:REACT_APP_API_URL
})

const authInterseptor = config =>{
    config.headers.authorization = `Beare ${localStorage.getItem('token')}`
    return config
}
$authHost.interceptors.request.use(authInterseptor)

export {
    $host,
    $authHost
}