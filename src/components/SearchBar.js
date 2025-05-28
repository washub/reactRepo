const SearchBar = ()=>{
    return (
        <div className="search-feed self-center w-2/5">
            <form>
                <div className="input-field w-full flex justify-around">
                    <input type="text" name="search" id="search"
                      className="w-10/12 text-base pl-1 border border-solid border-black"/>
                    <button className="px-4 text-lg bg-green-300 border border-solid border-green-800
                    hover:bg-green-200">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar