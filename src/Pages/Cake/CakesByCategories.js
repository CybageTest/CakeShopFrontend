import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCakes } from '../../Redux/Features/CakeSlice'
import CakeService from '../../Service/Cake Service/CakeService'
import specialDaySampleImage from '../../Assets/Images/others/specialDaySample.png'
import './displayCakesList.css'

const CakesByCategories = () => {

    const [cakesByCategory, setCakesByCategory] = useState([])
    const dispatch = useDispatch()
    const valueToFind = useSelector((state) => state.value.valueToFind)


    useEffect(() => {
        CakeService.fetchCakeByCategory(valueToFind).then(data => setCakesByCategory(data))
    }, [])

    return (
        <div className="cakes-by-category">
            < div className="row row-cols-1 row-cols-md-2 g-4" >
                {cakesByCategory && cakesByCategory.map((cake) => {
                    return (
                        <div className="categorywise-cake" key={cake.id} >
                            <div className="row">
                                <div className="col">
                                    {/* Image */}
                                    <div className="cakecard-img" >
                                        <img src={specialDaySampleImage} alt='sampleImage' />
                                    </div>
                                </div>
                                <div className="col">
                                    {/* INFO TAG */}
                                    <div className="row">
                                        {/* Cake name */}
                                        <div className="cakecard-name">
                                            <span>{cake.cakeName}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* Cake Info*/}
                                        <div className="cakecard-description" >
                                            <span>{cake.description}</span>
                                        </div>
                                    </div>

                                    <div className="row" >
                                        <div className="col">
                                            <div className="cake-weight-tag-price" style={{ display: "flex", justifyContent: "space-between" }}>
                                                <div className="cake-weight-cat" >
                                                    <div className="cakecard-category">
                                                        {cake.category === "EGG" ? <img src={require("../../Assets/Icons/non-veg.png")} style={{ height: "25px", width: "25px" }} /> : <img src={require("../../Assets/Icons/veg.png")} style={{ height: "25px", width: "25px" }} />}
                                                    </div>
                                                    <div className="cakecard-weight">
                                                        {cake.weight === 1000 ? <span style={{ fontWeight: "bold" }}>1 Kg</span> : <span style={{ fontWeight: "bold" }}>0.5 Kg</span>}
                                                    </div>
                                                </div>
                                                <div className="cakecard-price" >
                                                    <span>₹ {cake.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="add-cart btn" onClick={() => {
                                                dispatch(addToCakes(cake))
                                            }}>ADD</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                })}
            </div>
        </div>
    )
}

export default CakesByCategories
