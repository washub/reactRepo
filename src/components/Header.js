import Logo from './Logo'
import NavBar from './NavBar';
const Header = ()=>{
    return (
       <div className="flex header">
            <Logo/>
            <NavBar/>
       </div>
    )
}

export default Header;