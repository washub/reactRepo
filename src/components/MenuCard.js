import { ZWIGGY_IMG_CDN_URL } from "../common/constants"

const MenuCard = (props)=>{
    const {name, id, price,defaultPrice, ratings, description, itemAttribute, imageId, category} =props?.info
    const showLine = props.showLine
                      
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
                {showLine?<div className="horizonal-line mb-4 border-b border-solid border-gray-300"></div>:<></>}
        </div>
    )
}


export const withBestSellerMenuCard = (MenuCard)=>{
    return (props)=>{
        return (
            <div className="menu-card-bestseller relative ">
            <label className="absolute left-4 -top-2 bg-red-100 text-sm font-semibold italic px-3 rounded-md">Best Sellers</label>
            <MenuCard {...props}/>
            </div>
        )
    }
}



export default MenuCard