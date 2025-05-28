import RestaurantCardsContainer from "./RestaurantCardsContainer"
import Filter from './Filter'
import useOnlineStatus from "../hooks/useOnlineStatus"
const MainContainer = ()=>{
    const isOnline = useOnlineStatus();

    if(!isOnline){
        return <div className="offline">
            <h3>Oops seems like you are not connected to internet</h3>
            <h4>Please check your internet connection</h4>
        </div>
    }
    return (
        <div className="main-container">
            <Filter/>
            <RestaurantCardsContainer/>
        </div>
    )
}
export default MainContainer