import axios from "axios"

class AddOnService {
    fetchAllAddons() {
        const fetchAllAddons = process.env.REACT_APP_BASE_API_URL_ADDON + "/getAllAddons"
        return axios.get(fetchAllAddons).then(response => response.data).catch(error => console.log(error))
    }
}

export default new AddOnService()