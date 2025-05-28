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
        <div className="menu">
            {restItem.map((res, ind) =>{
               return (
                 <div key={ind} className="menu-category">
                    <div className="menu-title"><h3>{res.card.card.title} ({res?.card?.card?.itemCards?.length})</h3></div>
                    {res?.card?.card?.itemCards?.map(item =>{
                        const {name, id, price,defaultPrice, ratings, description, itemAttribute, imageId, category} = item?.card?.info
                      
                        return (
                            <div className="menu-info" key={id}>
                                <div className="menu-body">
                                    <div className={itemAttribute.vegClassifier==="NONVEG"?"nonveg":"veg"}></div>
                                    <h5>{name}</h5>
                                    <h6>₹{price/100|| defaultPrice/100}</h6>
                                    {/* {ratings.aggregatedRating.rating?'⭐' + ratings.aggregatedRating.rating +' (' + ratings.aggregatedRating.ratingCountV2+')':''}</h6> */}
                                    {ratings.aggregatedRating.rating? <h6>⭐ {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})</h6>:<></>}
                                    <p>{description}</p>
                                </div>
                                <div >
                                    {imageId ?<img className="menu-logo" src={ZWIGGY_IMG_CDN_URL+imageId} alt={category} />:<></>}
                                </div>
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