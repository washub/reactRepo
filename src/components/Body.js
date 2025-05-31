import SearchBar from './SearchBar'
import MainContainer from './MainContainer'
import RestaurantCardsContainer from './RestaurantCardsContainer'
import { useState } from 'react'
import SearchContext from '../common/context/SearchContext'
const Body = ()=>{
    const [search, setSearch] = useState(null)
    return (
        <div className="body mt-4 flex flex-col gap-4">
            <SearchContext.Provider value={{search, setSearch}}>
                <SearchBar/>
                <MainContainer/>
            </SearchContext.Provider>
        </div>
    )
}

export default Body