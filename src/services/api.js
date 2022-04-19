import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://18.190.28.4:8080'
})
