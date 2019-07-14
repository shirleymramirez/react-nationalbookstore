import React from 'react';
import SearchBooks from './SearchBooks';
import Book from './Book';
import './Book.css';

const BookList = ({ books, search, onSearchSubmit, addToCart }) => {
    return (
        <div>
            <div>
                <SearchBooks
                    search={search}
                    onSearchSubmit={onSearchSubmit}
                />
            </div>
            <div>
                <h1>BookList</h1>
                <div className="booksShelf">
                    {books.map(book => {
                        return (
                            <Book
                                key={book.id}
                                addToCart={addToCart}
                                {...book}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BookList;