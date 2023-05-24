import axios from "axios"
import { convertStringToEnum, capitalizeString } from "../../Utils/RefineArray"

class CakeService {
    fetchAllCakes() {
        const fetchDataURL = process.env.REACT_APP_BASE_API_URL_CAKE + "/allcakes"
        return axios.get(fetchDataURL).then(response => response.data).catch(error => console.log(error))
    }

    fetchAllCategories() {
        const fetchDataURL = process.env.REACT_APP_BASE_API_URL_CAKE + "/cake-categories"
        return axios.get(fetchDataURL).then(response => response.data).catch(error => console.log(error))
    }

    fetchAllFlavours() {
        const fetchDataURL = process.env.REACT_APP_BASE_API_URL_CAKE + "/cake-flavours"
        return axios.get(fetchDataURL).then(response => response.data).catch(error => console.log(error))
    }

    fetchAllOccassions() {
        const fetchDataURL = process.env.REACT_APP_BASE_API_URL_CAKE + "/menu-cakes"
        return axios.get(fetchDataURL).then(response => response.data).catch(error => console.log(error))
    }

    fetchCakeByCategory = (category) => {
        let categoryToFind = capitalizeString(category)
        const fetchDataURL = process.env.REACT_APP_BASE_API_URL_CAKE + "/byCategory/" + categoryToFind

        return axios.get(fetchDataURL).then(response => response.data).catch(error => console.log(error))

    }

    fetchCakeByFlavours = (flavour) => {
        let flavourToFind = capitalizeString(flavour)
        const fetchDataURL = process.env.REACT_APP_BASE_API_URL_CAKE + "/byFlavours/" + flavourToFind

        return axios.get(fetchDataURL).then(response => response.data).catch(error => console.log(error))

    }

    fetchCakeByOccassions = (occasions) => {
        let occasion = convertStringToEnum(occasions)
        const fetchDataURL = process.env.REACT_APP_BASE_API_URL_CAKE + "/byOccasions/" + occasion

        return axios.get(fetchDataURL).then(response => response.data).catch(error => console.log(error))

    }
}

export default new CakeService()