import { useEffect, useState } from "react"
import { refineArray } from "../../Utils/RefineArray"
import CakeService from '../../Service/Cake Service/CakeService'
import { useDispatch } from "react-redux"
import { changeValueToFind, changeValueToRender } from '../../Redux/Features/ValueSlice'
import './filterMenuList.css'

const FetchMenuByOccassions = () => {

    const [menuByOccassions, setMenuByOccassions] = useState([])
    const dispatch = useDispatch()
    const modifiedMenu = []

    useEffect(() => {
        CakeService.fetchAllOccassions().then(data => setMenuByOccassions(data))
    }, [])

    refineArray(menuByOccassions, modifiedMenu)

    return (
        <div className="menu-list">
            {modifiedMenu.map((occasion) => {
                return (
                    <div className="menu-items" key={occasion} onClick={() => {
                        dispatch(changeValueToFind(occasion))
                        dispatch(changeValueToRender("occassion"))
                    }}>
                        {occasion} <span>Cakes</span>
                    </div>
                )
            })}
        </div>
    )

}
export default FetchMenuByOccassions
