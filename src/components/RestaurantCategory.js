import {useState} from "react";
import MenuCard, {withBestSellerMenuCard} from "./MenuCard";

const RestaurantCategory = ({category, expand, expandIndex})=>{

    const MenuCardWithBestSeller = withBestSellerMenuCard(MenuCard)
    const handleClick = ()=>{
        expandIndex()
    }
    return (
        <div className="menu-category">
            <div className="menu-title font-bold text-xl mb-5 flex justify-between cursor-pointer"
            onClick={handleClick}>
                <h3>{category?.title} ({category?.itemCards?.length})</h3>
                <span><img src={expand?"https://www.svgrepo.com/show/506647/chevron-bottom.svg":"https://www.svgrepo.com/show/506650/chevron-top.svg"} alt="" className="w-8 h-8"/></span>
            </div>
            {expand?category?.itemCards?.map((item, mind) =>{
                return item?.card?.info?.isBestseller
                ?<MenuCardWithBestSeller key={item?.card?.info?.id} info={ item?.card?.info} showLine={category?.itemCards.length-1!==mind?true:false}/>
                :<MenuCard key={item?.card?.info?.id} info={ item?.card?.info} showLine={category?.itemCards.length-1!==mind?true:false}/>
            }):<></>}
        </div>
    )
}

export default RestaurantCategory