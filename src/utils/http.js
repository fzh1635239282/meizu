import axios from 'axios'

export default ({method, url, params}) => {
    return axios({
        method,
        url,
        params
    })
}
