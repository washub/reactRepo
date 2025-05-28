import RestaurantCard from './RestaurantCard'
import resData from '../common/swiggy_data.json'
import { useEffect, useState } from 'react'
import { SWIGGY_URI } from '../common/constants'
import Shimmer from './Shimmer'


const RestaurantCardsContainer = ()=>{
  const [restData, setRestData] = useState([]);

  useEffect(()=>{
    fetchSwiggyData();
  }, [])

  const fetchSwiggyData = async() =>{
    const response = await fetch(SWIGGY_URI)
    const data = await response.json()
    setRestData(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  console.log("Hi component rendered")
    return restData?.length!==0? (
        <div className="restaurant-container ml-56 flex flex-wrap w-10/12 gap-4">
          {
            restData.map(res=> <RestaurantCard key = {res?.info?.id} restaurant={res}/>)
          }
        </div>
    ) : <Shimmer/>
}

export default RestaurantCardsContainer