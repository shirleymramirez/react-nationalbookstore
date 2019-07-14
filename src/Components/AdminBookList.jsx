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
        <div>
            <h1 style={{padding: '20px'}}>BookList</h1>
            <div className="booksShelf">
                { booksList }
            </div>
        </div>
    )
}

export default AdminBookList;