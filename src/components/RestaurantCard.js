import { Link } from "react-router"
import { ZWIGGY_IMG_CDN_URL } from "../common/constants"


const RestaurantCard = (props)=>{
    const {cloudinaryImageId, name, aggregatedDiscountInfoV3, sla, cuisines, avgRating, description, areaName, id} = props?.restaurant?.info
    return (
        <Link to={"/restaurant/"+id} className="anchor">
            <div className="rest-card">
                <div className="rest-logo">
                    <img src={ZWIGGY_IMG_CDN_URL + cloudinaryImageId} alt={name} />
                    <div className="banner">
                        <div className="banner-text">{aggregatedDiscountInfoV3?.header !=undefined &&  aggregatedDiscountInfoV3?.subHeader != undefined?aggregatedDiscountInfoV3?.header+ " " +aggregatedDiscountInfoV3?.subHeader:""}</div>
                    </div>
                </div>
                <div className="rest-body">
                    <h4 className="rest-title">{name}</h4>
                    <div className="rating">
                        <span>{avgRating}⭐ . </span>
                        <span style={{fontWeight:"300"}}>{sla?.slaString} mins</span>
                    </div>
                    <div className="cuisine">{cuisines.join(", ")}</div>
                    <div className="description">{description}</div>
                    <div className="res-address">{areaName}</div>
                </div>
            </div>
        </Link>
    )
}

export default RestaurantCard