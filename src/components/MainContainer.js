import RestaurantCardsContainer from "./RestaurantCardsContainer"
import Filter from './Filter'
const MainContainer = ()=>{
    return (
        <div className="main-container">
            <Filter/>
            <RestaurantCardsContainer/>
        </div>
    )
}
export default MainContainer