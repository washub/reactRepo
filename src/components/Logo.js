import { LOGO_URL } from "../common/constants";
const Logo = ()=>{
    return (
        <div className="logo-container">
            <img className="w-24 logo" src={LOGO_URL}/>
        </div>
        )
}
export default Logo;