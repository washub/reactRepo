import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"

const RestaurantGroupedCategory = ({categories, expandGroup, shouldExpandChild})=>{
    const [expandIndex, setExpandIndex] = useState(null)
    return (
        <div className="nested-category">
            <div className="grouped-menu-title font-bold text-xl mb-5">
                <h3>{categories?.title}</h3>
            </div>
            {categories?.categories?.map((category, ind) =>{
                return (
                    <div key={category.categoryId}>
                        <RestaurantCategory  category = {category} expand={ expandIndex === ind && shouldExpandChild} expandIndex={()=> {expandGroup(); setExpandIndex(()=>expandIndex===ind?null:ind);}}/>
                        {ind!==categories.categories.length-1
                        ?<div className="line-break w-full border-b border-gray-300 my-4"></div>
                        :<></>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default RestaurantGroupedCategory