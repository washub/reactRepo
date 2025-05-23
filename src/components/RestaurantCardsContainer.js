import RestaurantCard from './RestaurantCard'
import restData from '../../swiggy_data.json'
const RestaurantCardsContainer = ()=>{
    return (
        <div className="restaurant-container">
          {
            restData.map(res=> <RestaurantCard key = {res.id} restaurant={res}/>)
          }
        </div>
    )
}

export default RestaurantCardsContainer