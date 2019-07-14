import React from 'react'

function PostBook({ id, title, author, description, price, pages, onDelete, onEdit }) {
    return (
        <>
            <div className="card-body adminbookList">
                <div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{author}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Price: ${price}</p>
                    <p className="card-text">Number of pages: {pages}</p>
                </div>
                <div className="editDeleteAdminButton">
                    <div>
                        <button style={{color: "red" }}onClick={() => onDelete(id)}>Delete</button>
                    </div>
                    <div>
                        <button 
                            onClick={() => onEdit(id)} 
                            type="button" 
                            data-toggle="modal" 
                            data-target="editBook"
                            data-whatever="editBook">
                                Edit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostBook;