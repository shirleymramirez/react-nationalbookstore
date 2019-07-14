import React from 'react';
import './Book.css';

function Book({ id, title, author, description, price, pages, addToCart }) {
    
    const clickHandler = () => {
        addToCart(id);
    };

    return (
        <div className="card-body bookContainer">
            <div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{author}</p>
                <p className="card-text">{description}</p>
                <p className="card-text">Price: ${price}</p>
                <p className="card-text">Number of pages: {pages}</p>
            </div>
            <div className="addToCartButton">
                <button onClick={clickHandler} value={id}>Add to Cart</button>
            </div>
        </div>
    )
}
export default Book;
