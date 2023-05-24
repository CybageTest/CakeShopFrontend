import axios from "axios"

class OrderService {
    addOrder = (orderBody) => {
        const addOrderURL = process.env.REACT_APP_BASE_API_URL_ORDER + "/"
        return axios.post(addOrderURL, orderBody).then(response => response.data).catch(error => console.log(error))
    }
}

export default new OrderService()