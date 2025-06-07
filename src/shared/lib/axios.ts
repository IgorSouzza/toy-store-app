import axios from 'axios'
import { cookies } from 'next/headers'

const api = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
})

api.interceptors.request.use(
  async (config) => {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response) {
      const { message } = error.response.data
      let formattedMessage: string
      if (Array.isArray(message)) {
        formattedMessage = message.join('\n')
      } else {
        formattedMessage = String(message)
      }
      console.error('Error:', formattedMessage)
      return Promise.reject(formattedMessage)
    }

    return Promise.reject(error)
  },
)

export { api }