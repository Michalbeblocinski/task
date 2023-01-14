import axios, {AxiosRequestConfig} from "axios";


const instanceAxios = axios.create({
    baseURL: '',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 3000
})


export const setupInterceptor = () =>{
    instanceAxios.interceptors.request.use(
        async (config:AxiosRequestConfig)=>{
           return config
        },error => {
        Promise.reject(error).then(error => console.error(error))
      }
    )

    const handleError = ({ message, data, status }: any) => {
        return Promise.reject({ message, data, status })
    }

    instanceAxios.interceptors.response.use(
        response => response,
        ({ message, response: { data, status } }) => {
            return handleError({ message, data, status })
        }
    )


}

export default instanceAxios
