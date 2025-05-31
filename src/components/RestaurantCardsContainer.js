import RestaurantCard from './RestaurantCard'
import resData from '../common/swiggy_data.json'
import { useContext, useEffect, useState } from 'react'
import { SWIGGY_URI } from '../common/constants'
import Shimmer from './Shimmer'
import FilterContext from '../common/context/FilterContext'
import SearchContext from '../common/context/SearchContext'


const RestaurantCardsContainer = ()=>{
  const [restData, setRestData] = useState([]);
  const [bkpData, setBkpData] = useState([])
  const {filterTopRated} = useContext(FilterContext);
  const {search} = useContext(SearchContext)

  useEffect(()=>{
    if(filterTopRated!==null && filterTopRated){
    setRestData((restData)=>bkpData.filter(rest => rest.info.avgRating>4.5))
    return;
    }
    if(search!==null && search!==undefined && search!==""){
      const filteredData = bkpData.filter(rest => rest.info.name?.toLowerCase().includes(search.toLowerCase()))
      console.log(filteredData)
      if(filteredData===null || filteredData===undefined || filteredData.length===0)
        setTimeout(()=> {setRestData(bkpData); console.log("time out set")}, 500)
      else
      setRestData(filteredData)
      return;
    }
    console.log("fetching data")
    fetchSwiggyData();
  }, [filterTopRated, search])

  

  const fetchSwiggyData = async() =>{
    const response = await fetch(SWIGGY_URI)
    const data = await response.json()
    setRestData(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setBkpData(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  
    return restData?.length!==0? (
        <div className="restaurant-container ml-56 flex flex-wrap w-10/12 gap-4">
          {
            restData?.map(res=> <RestaurantCard key = {res?.info?.id} restaurant={res}/>)
          }
        </div>
    ) : <Shimmer/>
}

export default RestaurantCardsContainer