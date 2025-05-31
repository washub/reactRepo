import RestaurantCardsContainer from "./RestaurantCardsContainer"
import Filter from './Filter'
import useOnlineStatus from "../hooks/useOnlineStatus"
import FilterContext from "../common/context/FilterContext";
import { useState } from "react";
const MainContainer = ()=>{
    const isOnline = useOnlineStatus();
    const [filterTopRated, setFilterTopRated] = useState(null);
    if(!isOnline){
        return <div className="offline">
            <h3>Oops seems like you are not connected to internet</h3>
            <h4>Please check your internet connection</h4>
        </div>
    }
    console.log("MainContainer Rendered")
    return (
        <div className="main-container flex">
            <FilterContext.Provider value={{filterTopRated, setFilterTopRated}}>
                <Filter/>
                <RestaurantCardsContainer/>
            </FilterContext.Provider>
        </div>
    )
}
export default MainContainer