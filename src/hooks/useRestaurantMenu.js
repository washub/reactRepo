import { useEffect, useState } from "react";
import { ZWIGGY_RESTAURANT_MENU_URL } from "../common/constants";

const useRestaurant = (restId)=>{
    const [restData, setRestData] = useState(null);

     useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async()=>{
        const response = await fetch(ZWIGGY_RESTAURANT_MENU_URL + restId )
        const data = await response.json()

        setRestData(data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(res =>res?.card?.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))

    }
    return restData
}

export default useRestaurant;