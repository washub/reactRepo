import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";
const NavBar = ()=>{
    const isOnline = useOnlineStatus();
    return ( <ul className="flex mr-8 gap-4 text-base font-medium cursor-pointer nav-items">
                <li>Online Status : {isOnline?"🟢":"🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>)
}

export default NavBar;