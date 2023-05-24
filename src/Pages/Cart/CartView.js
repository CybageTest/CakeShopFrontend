import { useDispatch, useSelector } from "react-redux"
import { incrementCakeQuantity, decrementCakeQuantity } from '../../Redux/Features/CakeSlice'
import { incrementAddonsQuantity, decrementAddonsQuantity } from '../../Redux/Features/AddOnSlice'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddOns from "../AddOns/AddOns";
import './cartview.css'

const CartView = () => {

    const cakes = useSelector((state) => state.cake.cakes)
    const addons = useSelector((state) => state.addon.addons)
    const dispatch = useDispatch()

    return (
        <div className="cart-view">
            <div className="shopping-cart-title">
                <p>SHOPPING CART</p>
            </div>
            <div className="cakes-list" style={{ marginTop: "15px", marginBottom: "10px", backgroundColor: "#F6F1E9" }}>
                {cakes.length !== 0 ? cakes.map((cake) => {
                    // console.log("CAke: " + JSON.stringify(cake))
                    return (
                        <div className="menu-items" key={cake.id} style={{ cursor: "pointer" }}>
                            <div className="row">
                                <div className="col-6" >
                                    <div className="cakecard-name" style={{ fontWeight: "bold", textAlign: "center" }}>
                                        <span>{cake.cakeName}</span>
                                        <div className="cake-egg-tag" >
                                            {cake.category === "EGG" ?
                                                <img src={require("../../Assets/Icons/non-veg.png")} style={{ height: "25px", width: "25px" }} />
                                                :
                                                <img src={require("../../Assets/Icons/veg.png")} style={{ height: "25px", width: "25px" }} />
                                            }
                                            {cake.weight === 1000 ?
                                                <span style={{ fontWeight: "bold" }}>1 Kg</span>
                                                :
                                                <span style={{ fontWeight: "bold" }}>0.5 Kg</span>
                                            }
                                        </div>

                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="incr-decr-quantity" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div className="incrementButton" onClick={() => {
                                            dispatch(incrementCakeQuantity(cake))
                                        }}>
                                            <AddCircleOutlineIcon />
                                        </div>
                                        <div className="quantity-value" style={{ fontWeight: "bold" }}>
                                            <p>{cake.quantity}</p>
                                        </div>
                                        <div className="decrementButton" onClick={() => {
                                            dispatch(decrementCakeQuantity(cake))
                                        }}>
                                            <RemoveCircleOutlineIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="cake-price" style={{ color: "#FF6E31", fontSize: "17px", fontWeight: "bolder", textAlign: "right", paddingRight: "5px" }}>
                                        <p>₹ {cake.price}</p>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )
                }) :
                    <div className="empty-cart" style={{ textAlign: "center" }}>
                        <img src={require('../../Assets/Images/Cart/emptyCart.png')} alt="emptyCartIamge" />
                        <p>Delicious cakes are waiting.... </p>
                    </div>}
            </div>
            <div className="addons-list">
                {addons && addons.map((addon) => {
                    return (
                        <div className="addon-cart-items" key={addon.id} style={{
                            backgroundColor: "#F6F1E9",
                        }}>
                            <div className="row">
                                <div className="col-6" style={{}}>
                                    <div className="addon-name" style={{ fontWeight: "bold" }}>
                                        {addon.name}
                                    </div>
                                </div>
                                <div className="col-4" >
                                    <div className="incr-decr-quantity" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                        <div className="incrementButton" onClick={() => {
                                            dispatch(incrementAddonsQuantity(addon))
                                        }}>
                                            <AddCircleOutlineIcon />
                                        </div>
                                        <div className="quantity-value" style={{ fontWeight: "bold" }}>
                                            <p>{addon.quantity}</p>
                                        </div>
                                        <div className="decrementButton" onClick={() => {
                                            dispatch(decrementAddonsQuantity(addon))
                                        }}>
                                            <RemoveCircleOutlineIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="addon-price" style={{ color: "#FF6E31", fontSize: "17px", fontWeight: "bolder" }}>
                                        <p>₹ {addon.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default CartView