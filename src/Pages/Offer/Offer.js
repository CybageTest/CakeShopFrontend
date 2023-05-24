import { useEffect, useState } from "react"
import OfferService from "../../Service/Offer Service/OfferService"
import DiscountIcon from '@mui/icons-material/Discount';
import './offer.css'
import { useDispatch } from "react-redux";
import { addOfferToCart, addToDiscount, applyDiscount, removeDiscount, removeOfferFromCart } from "../../Redux/Features/OfferSlice";
import { addShippingCost, removeShippingCost } from "../../Redux/Features/CartSlice";

const Offer = () => {
    const [offers, setOffers] = useState([])
    const [offerAdded, setOfferAdded] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        OfferService.getAllOffers().then(data => {
            delete data.at(0).order
            setOffers(data)
        })
    }, [])

    return (
        <div className="offers-main">
            {
                offers.map((offer) => {
                    return (
                        <div className="offers-list" key={offer.id}>
                            <div className="offers">
                                <DiscountIcon />
                                <span className="offer-name"> {offer.name}</span>
                                <br />
                                <span className="offer-description">
                                    {offer.description} |
                                </span>
                                <span className="offer-code">
                                    &nbsp; Use Coupon code &nbsp;
                                    <b>
                                        {offer.code}
                                    </b>
                                </span>
                            </div>
                            <div className="offer-button" onClick={() => {
                                if (!offerAdded) {
                                    dispatch(addToDiscount(offer.discount))
                                    dispatch(applyDiscount())
                                    dispatch(removeShippingCost())
                                    dispatch(addOfferToCart(offer))
                                    setOfferAdded(true)
                                } else {
                                    dispatch(removeDiscount())
                                    dispatch(addShippingCost())
                                    dispatch(removeOfferFromCart())
                                    setOfferAdded(false)
                                }

                            }}>
                                {
                                    !offerAdded ? <span>Add</span> : <span>Remove</span>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Offer