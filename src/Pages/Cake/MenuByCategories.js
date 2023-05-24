import { useEffect, useState } from "react"
import { refineArray } from "../../Utils/RefineArray"
import { useDispatch } from "react-redux"
import { changeValueToFind, changeValueToRender } from '../../Redux/Features/ValueSlice'
import CakeService from '../../Service/Cake Service/CakeService'
import './filterMenuList.css'

const FetchMenuByCategories = () => {

    const [menuByCategory, setMenuByCategory] = useState([])
    const dispatch=useDispatch()
    const modifiedMenu = []

    useEffect(() => {
        CakeService.fetchAllCategories().then(data => setMenuByCategory(data))
    }, [])

    refineArray(menuByCategory, modifiedMenu)

    return (
        <div className="menu-list">
            {modifiedMenu.map((category) => {
                return (
                    <div className="menu-items" key={category} onClick={() => {
                        dispatch(changeValueToFind(category))
                        dispatch(changeValueToRender("category"))
                    }}>
                        {category} <span>Cakes</span>
                    </div>
                )
            })}
        </div>
    )

}
export default FetchMenuByCategories
