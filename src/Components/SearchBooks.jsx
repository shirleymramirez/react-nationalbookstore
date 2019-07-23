import React from 'react';

const SearchBooks = ({ onSearchSubmit }) => {

    const onInputChange = (e) => {
        return onSearchSubmit(e.target.value);
    }

    return (
        <input className="searchField"  
            placeholder="Search..."
            type="text"
            onChange={onInputChange}
        />
    )

}

export default SearchBooks;