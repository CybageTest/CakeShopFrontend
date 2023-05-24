import { useEffect, useState } from "react"
import AddOnService from "../../Service/AddOn Service/AddOnService"
import { addToAddons } from '../../Redux/Features/AddOnSlice'
import { useDispatch } from "react-redux";
import './addon.css'


const AddOns = () => {

    const [addOns, setAddOns] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        AddOnService.fetchAllAddons().then(data => setAddOns(data))
    }, [])

    return (
        <div className="addons">
            <div className="addon-title">
                <p>Make it more special...</p>
            </div>
            <div className="addon-list" >
                {
                    addOns && addOns.map((addon) => {
                        return (
                            <div className="card-addon" key={addon.id} onClick={() => {
                                dispatch(addToAddons(addon))
                            }}>
                                <div className="row" >
                                    <div className="addon-name">
                                        {addon.name}
                                    </div>
                                    <div className="addon-price">
                                        <p>₹ {addon.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AddOns