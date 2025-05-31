import { useParams } from "react-router"
import useRestaurantMenu from '../hooks/useRestaurantMenu'
import Shimmer from "./Shimmer"
import RestaurantCategory from "./RestaurantCategory"
import RestaurantGroupedCategory from "./RestaurantGroupedCategory"

const RestaurantMenu = ()=>{
    const params = useParams();
    const restItem = useRestaurantMenu(params.resId)

   

    if(restItem===null){
        return <Shimmer/>
    }
    console.log(restItem)
    
    return (
        <div className="menu mt-4 flex flex-col gap-4 w-3/5 lg:w-3/5 mx-auto">
            {restItem.map((res, ind) =>{
               return (
                 <div key = {res?.card?.card?.categoryId +""+ ind} className="menu-category-wrapper">
                    {
                        res?.card?.card["@type"].includes("NestedItemCategory")
                        ? <RestaurantGroupedCategory categories = {res?.card?.card}/>
                        : <RestaurantCategory category = {res?.card?.card} expand={ind===0}/>
                     }       
                    {
                        restItem.length-1!==ind
                        ?<div className="cat-breaker w-full h-4 bg-gray-100 rounded-sm"></div>
                        :<></>
                    }
                    
                 </div>
               )
            })}
        </div>
    )
}

export default RestaurantMenu