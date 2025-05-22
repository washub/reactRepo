import React from "react"
import ReactDOM from "react-dom/client"

/**
 * AppLayout
 *  Header
 *      Logo
 *      NavItems
 *  Body
 *      Search
 *      RestaurantCardsContainer
 *          RestaurantCard
 *  Footer 
 *      CopyRight
 *      Links
 *      Address
 * 
 */
const Logo = ()=>{
    return (<img src="./img/zwiggy-logo.png"/>)
}
const Header = ()=>{
    return (
       <div>
            <Logo/>
       </div>
    )
}
const AppLayout = ()=>{
    return (
        <div>
            <h1>Hello</h1>
            <Header/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)