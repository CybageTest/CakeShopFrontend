import { useEffect, useState } from "react"
import { refineArray } from "../../Utils/RefineArray"
import { useDispatch } from "react-redux"
import { changeValueToFind, changeValueToRender } from '../../Redux/Features/ValueSlice'
import CakeService from '../../Service/Cake Service/CakeService'
import './filterMenuList.css'

const FetchMenuByFlavours = () => {

    const [menuByFlavours, setMenuByFlavours] = useState([])

    const dispatch = useDispatch()

    const modifiedMenu = []

    useEffect(() => {
        CakeService.fetchAllFlavours().then(data => setMenuByFlavours(data))
    }, [])

    refineArray(menuByFlavours, modifiedMenu)

    return (
        <div className="menu-list">
            {modifiedMenu.map((flavour) => {
                return (
                    <div className="menu-items" key={flavour}
                        onClick={() => {
                            dispatch(changeValueToFind(flavour))
                            dispatch(changeValueToRender("flavour"))
                        }}>
                        {flavour}
                    </div>
                )
            })}
        </div>
    )

}
export default FetchMenuByFlavours
