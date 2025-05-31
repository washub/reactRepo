import { useContext } from "react"
import FilterContext from "../common/context/FilterContext"

const Filter = ()=>{
    const {filterTopRated, setFilterTopRated} = useContext(FilterContext);

    return (
        <div className="filter-container p-4 flex flex-col fixed left-0 h-full border border-solid border-black">
            <div className="filter border border-solid border-green-600 bg-green-300 p-2 cursor-pointer hover:bg-green-200">
                <button className="filter-btn text-base" onClick={()=>setFilterTopRated(true)}>Top Rated Restaurants</button>
            </div>
        </div>
    )
}
export default Filter