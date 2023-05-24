import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "../../Components/Header/Header"
import AllCakes from "../Cake/AllCakes"
import CakesByCategories from "../Cake/CakesByCategories"
import CakesByFlavours from "../Cake/CakesByFlavours"
import CakesByOccassion from "../Cake/CakesByOccassion"
import CartView from "../Cart/CartView"
import FilterMenu from "../Filter Menu/FilterMenu"
import Footer from "../../Components/Footer/Footer"
import { totalCakeAmount } from '../../Redux/Features/CakeSlice'
import { totalAddonAmount } from '../../Redux/Features/AddOnSlice'
import './menu.css'
import { useNavigate } from "react-router"
import AddOns from "../AddOns/AddOns"
import Divider from '@mui/material/Divider';


const Menu = () => {

    const cakes = useSelector((state) => state.cake.cakes)
    const addons = useSelector((state) => state.addon.addons)
    const viewToRender = useSelector((state) => state.value.valueToRender)
    const cakeTotal = useSelector((state) => state.cake.totalAmount)
    const addonTotal = useSelector((state) => state.addon.totalAmount)
    const finalAmount = cakeTotal + addonTotal

    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(totalCakeAmount(cakes))
        dispatch(totalAddonAmount(addons))
    })


    return (
        <div className="main-menu">
            <div className="Header">
                <Header />
                <br /><br /><br /><br />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <FilterMenu />
                    </div>


                    {/* VERTICAL DIVIDER */}
                    {/* <div className="col-1" style={{width:"1px"}}>
                        <div className="vr" style={{ height: "100%", border: "1px solid grey" }}></div>
                    </div> */}


                    {/* Cakes with photos */}
                    <div className="col-6">
                        <div className="cakes-info-data" >
                            {viewToRender === "allcakes" && <AllCakes />}
                            {viewToRender === "flavour" && <CakesByFlavours />}
                            {viewToRender === "category" && <CakesByCategories />}
                            {viewToRender === "occassion" && <CakesByOccassion />}
                        </div>
                    </div>

                    {/* VERTICAL DIVIDER */}
                    {/* <div className="col-1" style={{width:"1px"}}>
                        <div className="vr" style={{ height: "100%", border: "1px solid grey"}}></div>
                    </div> */}

                    {/* Cart */}
                    <div className="col-4 fixed"  >
                        <div className="cart-view">
                            <CartView />
                        </div>
                        <div className="addon-view">
                            <AddOns />
                        </div>
                        <div className="checkout">
                            <div className="item-total-price" >
                                <div className="title">
                                    <p>ITEM TOTAL</p>
                                </div>
                                <div className="price">
                                    ₹ {finalAmount}
                                </div>
                            </div>
                            <div className="checkout-button" onClick={() => {
                                navigate('/cart')
                            }} >
                                Checkout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default Menu