import { useContext } from "react"
import SearchContext from "../common/context/SearchContext"

const SearchBar = ()=>{
    const searchContext = useContext(SearchContext);
    const handleSearch = (e)=>{
        e.preventDefault()
        searchContext.setSearch(e.target.search.value)
        e.target.reset();
       
    }
    // console.log("Search component")
    return (
        <div className="search-feed w-3/5 self-center sm:w-2/5">
            <form onSubmit={handleSearch}>
                <div className="input-field w-full flex justify-around flex-col sm:flex-row">
                    <input type="text" name="search" id="search"
                      className="w-full sm:w-10/12 text-base pl-1 border border-solid border-black"/>
                    <button className="text-sm bg-green-300 border border-solid border-green-800
                    hover:bg-green-200 mt-2  self-center sm:mt-0 sm:w-20 sm:text-lg">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar