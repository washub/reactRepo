import useOnlineStatus from '../hooks/useOnlineStatus';
import Logo from './Logo'
import NavBar from './NavBar';
const Header = ()=>{
    const isOnline = useOnlineStatus();
    return (
       <div className={`flex justify-between items-center header border-b border-gray-600 ${isOnline? `bg-green-100`:`bg-red-100`}`}>
            <Logo/>
            <NavBar/>
       </div>
    )
}

export default Header;