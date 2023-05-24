import axios from "axios";

class OfferService {
    getAllOffers() {
        const getAllOffersURL = process.env.REACT_APP_BASE_API_URL_OFFER + '/getAllOffers'
        return axios.get(getAllOffersURL).then(response => response.data).catch(error => console.log(error))
    }
}

export default new OfferService()
