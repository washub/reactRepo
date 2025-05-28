import SearchBar from './SearchBar'
import MainContainer from './MainContainer'
import RestaurantCardsContainer from './RestaurantCardsContainer'
const Body = ()=>{
    return (
        <div className="body mt-4 flex flex-col gap-4">
            <SearchBar/>
            <MainContainer/>
        </div>
    )
}

export default Body