const SearchBar = ()=>{
    return (
        <div className="search-feed">
            <form>
                <div className="input-field">
                    <input type="text" name="search" id="search" />
                    <button>Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar