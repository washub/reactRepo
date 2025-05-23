import React from "react"
import ReactDOM from "react-dom/client"
import logo from './img/zwiggy-logo.png'
import restData from './swiggy_data.json'
const swiggyCloudinary = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

/**
 * AppLayout
 *  Header
 *      Logo
 *      NavItems
 *  Body
 *      Search
 *      RestaurantCardsContainer
 *          RestaurantCard
 *              img, rest-name, cuisine, rating, eta
 *  Footer 
 *      CopyRight
 *      Links
 *      Address
 * 
 */
const Logo = ()=>{
    return (
        <div className="logo-container">
            <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Chef-restaurant-logo-by-DEEMKA-STUDIO-4-580x348.jpg"/>
        </div>
        )
}
const NavBars = ()=>{
    return ( <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>)
}
const SearchBar = ()=>{
    return (
        <div className="search-feed">
            <form>
                <div className="input-field">
                    <input type="text" name="search" id="search" />
                    <button>Search</button>
                </div>
            </form>
        </div>
    )
}
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
const RestaurantCardsContainer = ()=>{
    return (
        <div className="restaurant-container">
          {
            restData.map(res=> <RestaurantCard key = {res.id} restaurant={res}/>)
          }
        </div>
    )
}
 // <RestaurantCard title="Burger King" logo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/aa2250f4-9b3d-4df1-a58d-276d36cc813e_5938.jpg"
            // eta="30" cuisine="Burgers, American" address="Malviya Nagar" rating="4.1" description="Whopper, Fries, Chicken Burger" banner="ITEMS AT ₹99"/>
            // <RestaurantCard title="The Belgian Waffle" logo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/22/0677b1c8-cce8-4302-a4fb-b60617363164_3ac65a75-1569-4663-8593-aa298ab24c05.jpg"
            // eta="29" cuisine="Desserts, Waffles" address="C Scheme" rating="4.4" description="Sweet & savory waffle options" banner="ITEMS AT ₹240"/>
            // <RestaurantCard title="Baskin Robbins" logo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tpvntcqsyt0tcnfu68bx" 
            // eta="30" cuisine="Ice Cream, Desserts" address="Multiple Locations" rating="4.5" description="Ice creams, shakes" banner="20% OFF"/>
            // <RestaurantCard title="Cheelizza" logo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/3/162ec47c-5f11-41ec-a0d2-94a06070a97a_921579.jpg"
            // eta="25" cuisine="Pizza, Fast Food" address="Lal Kothi" rating="4.0" description="Desi pizza and burgers"/>
            // <RestaurantCard title="La Pino'z Pizza" logo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tmkacw8u3ou9aypoag6z"
            // eta="26" cuisine="Pizza, Pasta" address="Malviya Nagar" rating="4.2" description="Italian fast food" banner="BUY 1 GET 1 FREE"/>
            // <RestaurantCard title="Rolls & Bowls Co." logo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/66f23f91-5a91-4ada-868e-ccee1d155ee6_942869.sss.jpg"
            // eta="31" cuisine="Rolls, Fast Food" address="Raja Park" rating="4.3" description="Kathi rolls, burgers" banner="HOT DEAL"/>
            // <RestaurantCard title="Kwality Walls" logo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/27/796411eb-8091-4903-a58d-482b5ea99d60_560656.jpg"
            // eta="22" cuisine="Ice Cream, Desserts" address="City wide" rating="4.5" description="Family packs, cones, alkdajdalfdja, ajlskjfalkjfalkdfjs, ajdaljalfjalkdfjalkdja, ajdfakajlkdjfalkdfjalkdfja, dafjalkdjalkfdjalk"/>
const Body = ()=>{
    return (
        <div className="body">
            <SearchBar/>
            <RestaurantCardsContainer/>
        </div>
    )
}
const Header = ()=>{
    return (
       <div className="header">
            <Logo/>
            <NavBars/>
       </div>
    )
}
const AppLayout = ()=>{
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)