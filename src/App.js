import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"



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
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {path:"/", Component: AppLayout,
        children : [
            {path:"/", Component: Body},
            {path:"/about", Component: About},
            {path:"/contact", Component: Contact},
            {path:"/restaurant/:resId", Component: RestaurantMenu}
        ],
        errorElement:<Error/>
    }
    
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)