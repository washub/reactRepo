import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"



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