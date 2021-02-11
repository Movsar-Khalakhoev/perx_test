import axios from 'axios'

export const baseURL = 'https://murmuring-tor-81614.herokuapp.com'

const $host = axios.create({
  baseURL: `${baseURL}/api/`,
})

export default $host
