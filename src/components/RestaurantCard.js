const swiggyCloudinary = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"


const RestaurantCard = (props)=>{
    const {imageId, name, aggregatedDiscountInfoV3, slaString, cuisines, avgRating, description, areaName} = props.restaurant
    return (
        <div className="rest-card">
            <div className="rest-logo">
                <img src={swiggyCloudinary + imageId} alt={name} />
                <div className="banner">
                     <div className="banner-text">{aggregatedDiscountInfoV3.header + " " + aggregatedDiscountInfoV3.subHeader}</div>
                </div>
            </div>
            <div className="rest-body">
                <h4 className="rest-title">{name}</h4>
                <div className="rating">
                    <span>{avgRating}⭐ . </span>
                    <span style={{fontWeight:"300"}}>{slaString} mins</span>
                </div>
                <div className="cuisine">{cuisines.join(", ")}</div>
                <div className="description">{description}</div>
                <div className="res-address">{areaName}</div>
            </div>
        </div>
    )
}

export default RestaurantCard