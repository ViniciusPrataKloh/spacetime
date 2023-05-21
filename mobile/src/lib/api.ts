import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://10.0.0.158:3333',
})

// export const api = axios.create({
//   baseURL: 'http://10.0.0.228:3333',
// })
