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
        <div className="menu mt-4 flex flex-col gap-4 w-4/5 mx-auto">
            {restItem.map((res, ind) =>{
               return (
                 <div key={ind} className="menu-category">
                    <div className="menu-title font-bold text-lg mb-3"><h3>{res.card.card.title} ({res?.card?.card?.itemCards?.length})</h3></div>
                    {res?.card?.card?.itemCards?.map(item =>{
                        const {name, id, price,defaultPrice, ratings, description, itemAttribute, imageId, category} = item?.card?.info
                      
                        return (
                            <div className="menu-container flex flex-col" key={id}>
                                <div className="menu-info h-44 w-full flex gap-3 items-start" key={id}>
                                    <div className="menu-body w-3/4">
                                        <div className={itemAttribute.vegClassifier==="NONVEG"?"nonveg":"veg"}></div>
                                        <h5>{name}</h5>
                                        <h6>₹{price/100|| defaultPrice/100}</h6>
                                        {/* {ratings.aggregatedRating.rating?'⭐' + ratings.aggregatedRating.rating +' (' + ratings.aggregatedRating.ratingCountV2+')':''}</h6> */}
                                        {ratings.aggregatedRating.rating? <h6>⭐ {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})</h6>:<></>}
                                        <p>{description}</p>
                                    </div>
                                    <div className="w-1/5 h-4/5 mx-auto">
                                        {imageId ?<img className="menu-logo w-full h-full object-cover rounded-lg" src={ZWIGGY_IMG_CDN_URL+imageId} alt={category} />:<></>}
                                    </div>
                                 </div>
                                 <div className="horizonal-line mb-4 border-b border-solid border-gray-500"></div>
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