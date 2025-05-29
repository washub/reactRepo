import {useState} from "react";
import MenuCard, {withBestSellerMenuCard} from "./MenuCard";

const RestaurantCategory = (props)=>{
    const [expandCategory, setExpandCategory] = useState(props.expand)
    const category = props.category;
    const MenuCardWithBestSeller = withBestSellerMenuCard(MenuCard)
    const handleClick = ()=>{
        setExpandCategory(!expandCategory)
    }
    return (
        <div className="menu-category">
            <div className="menu-title font-bold text-xl mb-5"
            onClick={handleClick}><h3>{category?.title} ({category?.itemCards?.length})</h3></div>
            {expandCategory?category?.itemCards?.map((item, mind) =>{
                return item?.card?.info?.isBestseller
                ?<MenuCardWithBestSeller key={item?.card?.info?.id} info={ item?.card?.info} showLine={category?.itemCards.length-1!==mind?true:false}/>
                :<MenuCard key={item?.card?.info?.id} info={ item?.card?.info} showLine={category?.itemCards.length-1!==mind?true:false}/>
            }):<></>}
        </div>
    )
}

export default RestaurantCategory