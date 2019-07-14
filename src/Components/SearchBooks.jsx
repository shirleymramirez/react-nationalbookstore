import React from 'react';

const SearchBooks = ({ search, onSearchSubmit }) => {

    const onInputChange = (e) => {
        return onSearchSubmit(e);
    }

    return (
        <input className="searchField"  
            placeholder="Search..."
            type="text"
            value={search}
            onChange={(e)=> onInputChange(e)}
        />
    )

}

export default SearchBooks;