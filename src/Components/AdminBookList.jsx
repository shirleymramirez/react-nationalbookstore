import React from 'react';
import PostBook from './PostBook';
import './Book.css';

const AdminBookList = ({ books, onDelete, onEdit }) => {
    const booksList = books.map(book => {
        return (
            <PostBook 
                key={book.id} 
                    {...book} 
                onDelete={onDelete} 
                onEdit={onEdit} 
            />
        )
    })
    return (
        <div className="booksShelf">
            { booksList }
        </div>
    )
}

export default AdminBookList;