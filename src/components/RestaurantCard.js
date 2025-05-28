import { Link } from "react-router"
import { ZWIGGY_IMG_CDN_URL } from "../common/constants"


const RestaurantCard = (props)=>{
    const {cloudinaryImageId, name, aggregatedDiscountInfoV3, sla, cuisines, avgRating, description, areaName, id} = props?.restaurant?.info
    return (
        <Link to={"/restaurant/"+id} className="anchor block h-64 w-2/6 border border-solid border-gray-500 overflow-hidden rounded-lg" style={{width:"22%"}}>
            <div className="rest-card h-full w-full flex flex-col gap-2 justify-start">
                <div className="rest-logo h-3/6 overflow-hidden relative rounded-lg">
                    <img src={ZWIGGY_IMG_CDN_URL + cloudinaryImageId} alt={name} className="h-full w-full object-cover"/>
                    <div className="banner absolute bottom-0">
                        <div className="banner-text">{aggregatedDiscountInfoV3?.header !=undefined &&  aggregatedDiscountInfoV3?.subHeader != undefined?aggregatedDiscountInfoV3?.header+ " " +aggregatedDiscountInfoV3?.subHeader:""}</div>
                    </div>
                </div>
                <div className="rest-body h-2/5 flex flex-col justify-between pl-1">
                    <h4 className="rest-title">{name}</h4>
                    <div className="rating">
                        <span>{avgRating}⭐ . </span>
                        <span style={{fontWeight:"300"}}>{sla?.slaString} mins</span>
                    </div>
                    <div className="cuisine text-base">{cuisines.join(", ")}</div>
                    {/* <div className="description">{description}</div> */}
                    <div className="res-address">{areaName}</div>
                </div>
            </div>
        </Link>
    )
}

export default RestaurantCard