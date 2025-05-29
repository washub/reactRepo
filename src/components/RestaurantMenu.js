import { useEffect, useState } from "react"
import { ZWIGGY_IMG_CDN_URL } from "../common/constants"
import { useParams } from "react-router"
import useRestaurantMenu from '../hooks/useRestaurantMenu'
import Shimmer from "./Shimmer"
import MenuCard, { withBestSellerMenuCard } from "./MenuCard"

const RestaurantMenu = ()=>{
    const params = useParams();
    const restItem = useRestaurantMenu(params.resId)

   

    if(restItem===null){
        return <Shimmer/>
    }
    console.log(restItem)
    const MenuCardWithBestSeller = withBestSellerMenuCard(MenuCard)
    return (
        <div className="menu mt-4 flex flex-col gap-4 w-4/5 lg:w-3/5 mx-auto">
            {restItem.map((res, ind) =>{
               return (
                 <div key={ind} className="menu-category">
                    <div className="menu-title font-bold text-xl mb-5"><h3>{res.card.card.title} ({res?.card?.card?.itemCards?.length})</h3></div>
                    {res?.card?.card?.itemCards?.map(item =>{
                        return item?.card?.info?.isBestseller
                        ?<MenuCardWithBestSeller key={item?.card?.info?.id} info={ item?.card?.info}/>
                        :<MenuCard key={item?.card?.info?.id} info={ item?.card?.info}/>
                    })}
                 </div>
               )
            })}
        </div>
    )
}

export default RestaurantMenu