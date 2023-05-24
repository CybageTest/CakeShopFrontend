import MenuByCategories from "../Cake/MenuByCategories"
import MenuByFlavours from "../Cake/MenuByFlavours"
import MenuByOccassions from "../Cake/MenuByOccassions"
import './filterMenu.css'

const FilterMenu = () => {
    return (
        <div className="filter-menu">
            <div className="container">
                <div className="row">
                    {/* Menu List */}
                    <div className="col" >
                        <div className="menu-list-title">
                            <h2>Menu List</h2>
                        </div>
                        <div className="by-occasions">
                            <div className="filter-title" >
                                Occassions
                            </div>
                            <MenuByOccassions />
                        </div>
                        <div className="by-categories">
                            <div className="filter-title" >
                                Categories
                            </div>
                            <MenuByCategories />
                        </div>
                        <div className="by-flavours">
                            <div className="filter-title">
                                Flavours
                            </div>
                            <MenuByFlavours />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu