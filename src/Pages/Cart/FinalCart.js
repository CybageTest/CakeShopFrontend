import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import Header from "../../Components/Header/Header"
import CheckForSignin from "../../Components/SignIn/CheckForSignin"
import CartView from "./CartView"
import Offer from "../Offer/Offer"
import { totalCakeAmount } from '../../Redux/Features/CakeSlice'
import { totalAddonAmount } from '../../Redux/Features/AddOnSlice'
import { addToBeforeGSTAmount, applyGST, addToTotalFinalAmount } from '../../Redux/Features/CartSlice'
import { useEffect } from "react"
import { applyDiscount, addToCartTotal } from "../../Redux/Features/OfferSlice"
import Order from "../Order/Order"
import Footer from "../../Components/Footer/Footer"


const FinalCart = () => {
    const cakes = useSelector((state) => state.cake.cakes)
    const addons = useSelector((state) => state.addon.addons)
    const deliveryCharges = useSelector((state) => state.cart.shippingCost)
    const user = useSelector((state) => state.user.user)
    const cakeTotal = useSelector((state) => state.cake.totalAmount)
    const addonTotal = useSelector((state) => state.addon.totalAmount)

    const discountedPrice = useSelector((state) => state.offer.discountedPrice)

    const cartTotal = cakeTotal + addonTotal + deliveryCharges

    const amountBeforeGST = cartTotal - discountedPrice

    const gstAmount = useSelector((state) => state.cart.gstAmount)
    const totalFinalAmount = amountBeforeGST + gstAmount

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(totalCakeAmount(cakes))
        dispatch(totalAddonAmount(addons))
        dispatch(addToBeforeGSTAmount(amountBeforeGST))
        dispatch(addToCartTotal(cartTotal))
        dispatch(applyDiscount(cartTotal))
        dispatch(applyGST())
        dispatch(addToTotalFinalAmount(totalFinalAmount))
    })
    return (
        <div>
            <div className="container">
                <div className="final-cart">
                    <div className="header">
                        <Header />
                        <br /><br /><br /><br />
                    </div>

                    {cakes.length === 0 ?
                        <div className="empty-cart" style={{ textAlign: "center" }}>
                            <div className="empty-cart-img" >
                                <img src={require('../../Assets/Images/Cakes/empty-cart.png')} alt="empty-cart" />
                            </div>
                            <div className="empty-cart-description">
                                <p>Delicious Cakes Are Waiting!</p>
                                <p>Your cart is empty, add cakes to continue</p>
                            </div>
                            <div className="btn order-now" style={{ backgroundColor: "orange" }} onClick={() => {
                                navigate('/menu')
                            }}>Order Now</div>
                        </div>
                        : <div className="row">
                            <div className="col" style={{ backgroundColor: "#F6F1E9" }}>
                                {/* cart tab */}
                                <div className="cart-view" >
                                    <CartView />
                                </div>
                                <hr />
                                <div className="offers-view">
                                    <Offer />
                                </div>
                                <hr />
                                <div className="cart-details">
                                    <div className="row">
                                        <div className="col">
                                            <p>Cart Total</p>
                                            <p>GST</p>
                                            <p>Packing Charges</p>
                                            <p>Delivery Charges</p>
                                            <p>Discounts</p>
                                        </div>
                                        <div className="col" style={{ textAlign: "right" }}>
                                            <p>:</p>
                                            <p>:</p>
                                            <p>:</p>
                                            <p>:</p>
                                            <p>:</p>
                                        </div>
                                        <div className="col" style={{ textAlign: "right" }}>
                                            <p>₹ {cartTotal}</p>
                                            <p>₹ {gstAmount.toFixed(2)}</p>
                                            <p>FREE</p>
                                            <p>
                                                {
                                                    deliveryCharges === 0
                                                        ?
                                                        <s>₹ {deliveryCharges}</s>
                                                        :
                                                        <span> &nbsp;₹ {deliveryCharges}</span>
                                                }
                                            </p>
                                            <p>- ₹ {discountedPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col">
                                            <p className="total-final-amount" style={{ fontWeight: "bolder", fontSize: "20px" }}>TOTAL</p>
                                        </div>
                                        <div className="col" style={{ textAlign: "right", fontWeight: "bolder", fontSize: "20px" }}>
                                            <p>:</p>
                                        </div>
                                        <div className="col" style={{ textAlign: "right", fontWeight: "bolder", fontSize: "20px" }}>
                                            {gstAmount ?
                                                <p>
                                                    ₹ {totalFinalAmount.toFixed(2)}
                                                </p>
                                                :
                                                <p>
                                                    ₹ {amountBeforeGST.toFixed(2)}
                                                </p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* signin tab */}
                                {user.length === 0 ?
                                    <div className="signin-tab" style={{ transform: "translate(0, 20%)" }}>
                                        <div className="signin-tab-title">
                                            SignIn
                                            <hr />
                                        </div>
                                        <CheckForSignin />
                                    </div> :
                                    <div>
                                        <Order />
                                    </div>}
                            </div>
                        </div>}
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default FinalCart