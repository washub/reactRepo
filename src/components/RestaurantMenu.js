import { useEffect, useState } from "react"
import { ZWIGGY_IMG_CDN_URL } from "../common/constants"
import { useParams } from "react-router"
import useRestaurantMenu from '../hooks/useRestaurantMenu'
import Shimmer from "./Shimmer"

const RestaurantMenu = ()=>{
    const params = useParams();
    const restItem = useRestaurantMenu(params.resId)

   

    if(restItem===null){
        return <Shimmer/>
    }

    return (
        <div className="menu mt-4 flex flex-col gap-4 w-4/5 lg:w-3/5 mx-auto">
            {restItem.map((res, ind) =>{
               return (
                 <div key={ind} className="menu-category">
                    <div className="menu-title font-bold text-xl mb-5"><h3>{res.card.card.title} ({res?.card?.card?.itemCards?.length})</h3></div>
                    {res?.card?.card?.itemCards?.map(item =>{
                        const {name, id, price,defaultPrice, ratings, description, itemAttribute, imageId, category} = item?.card?.info
                      
                        return (
                            <div className="menu-container flex flex-col" key={id}>
                                <div className="menu-info h-96 justify-evenly sm:h-44 w-full flex flex-col sm:flex-row sm:gap-3 items-start" key={id}>
                                    <div className="menu-body w-full h-40 overflow-clip sm:w-3/4">
                                        <div className={`w-3 h-3 rounded-sm ${itemAttribute.vegClassifier==="NONVEG"?"bg-red-500":"bg-green-600"}`}></div>
                                        <h5 className="text-lg font-semibold">{name}</h5>
                                        <h6>₹{price/100|| defaultPrice/100}</h6>
                                        {/* {ratings.aggregatedRating.rating?'⭐' + ratings.aggregatedRating.rating +' (' + ratings.aggregatedRating.ratingCountV2+')':''}</h6> */}
                                        {ratings.aggregatedRating.rating? <h6>⭐ {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})</h6>:<></>}
                                        <p>{description}</p>
                                    </div>
                                    <div className="w-2/4 h-44 sm:w-1/5 sm:h-4/5 mx-auto">
                                        {imageId ?<img className="menu-logo w-full h-full object-cover rounded-lg" src={ZWIGGY_IMG_CDN_URL+imageId} alt={category} />:<></>}
                                    </div>
                                 </div>
                                 <div className="horizonal-line mb-4 border-b border-solid border-gray-300"></div>
                            </div>
                        )
                    })}
                 </div>
               )
            })}
        </div>
    )
}

export default RestaurantMenu