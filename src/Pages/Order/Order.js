import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import './order.css'
import OrderService from "../../Service/Order Service/OrderService"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import { removeCakes } from "../../Redux/Features/CakeSlice"
import { initializeCart } from "../../Redux/Features/CartSlice"
import { removeAddon } from "../../Redux/Features/AddOnSlice"

const Order = () => {

    const cakes = useSelector((state) => state.cake.cakes)
    const addons = useSelector((state) => state.addon.addons)
    const shippingCost = useSelector((state) => state.cart.shippingCost)
    const user = useSelector((state) => state.user.user)
    const totalCost = useSelector((state) => state.cart.totalFinalAmount)
    const offer = useSelector((state) => state.offer.offer)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [messageOnCake, setMessageOnCake] = useState('')
    const [address, setAddress] = useState('')

    const orderBody = {
        messageOnCake,
        shippingCost,
        totalCost,
        address,
        cakes,
        user,
        offer,
        addons
    }

    const placeOrder = async () => {
        try {
            await OrderService.addOrder(orderBody).then((response) => {
                if (response) {
                    toast.success("Order successfully placed..!")
                    navigate('/menu')
                    dispatch(removeCakes())
                    dispatch(initializeCart())
                    dispatch(removeAddon())
                }
            })
        } catch (error) {
            toast.warning(error)
        }
    }

    return (
        <div className="order-main">
            <div className="mb-3">
                <label htmlFor="forMessageOnCake" className="form-label">Message On Cake</label>
                <input type="text" class="form-control" id="forMessageOnCake" value={messageOnCake}
                    onChange={(e) => {
                        setMessageOnCake(e.target.value)
                    }} />
            </div>
            <div className="mb-3">
                <label htmlFor="forAddress" className="form-label">Address</label>
                <textarea className="form-control" id="forAddress" value={address}
                    onChange={(e) => {
                        setAddress(e.target.value)
                    }} />
            </div>

            <div className="place-order-button"
                onClick={() => {
                    placeOrder()
                }}>
                Place Order
            </div>
        </div>
    )
}

export default Order