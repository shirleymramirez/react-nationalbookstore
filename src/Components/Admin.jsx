import React from 'react';
import AdminBookList from './AdminBookList';
import AddBook from './AddBook';
import './Book.css';

class Admin extends React.Component {
    state = {
        books: []
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8082/api/books');
        const json = await response.json();
        this.setState({
            books: json.map((book, index) => {
                let editing = false
                return {
                    ...book,
                    editing
                }
            })
        });
    }

    addBook = async newBook => {
        const res = await fetch('http://localhost:8082/api/books', {
            method: "POST",
            body: JSON.stringify(newBook),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const newBookWithId = await res.json()
        this.setState(prevState => {
            return {
                books: [...prevState.books, newBookWithId]
            }
        })
    }

    deleteBook = async id => {
        const url = `http://localhost:8082/api/books/${id}`
        const res = await fetch(url, {
            method: "DELETE"
        })
        if (res.ok) {
            this.setState(prevState => {
                return {
                    books: prevState.books.filter(book => book.id !== id)
                }
            })
        }
    }
    

    onEditBook = id => {
        this.setState(prevState => {
            return {
                books: prevState.books.map(book => {
                    return {
                        ...book,
                        editing: book.id === id
                    }
                })
            }
        })
    }

    handleBookChange = e => {
        e.preventDefault();
        const newBody = e.target.value;
        const myName = e.target.name;

        this.setState(prevState => {
            return {
                books: prevState.books.map(book => {
                    if (book.editing) {
                        return {
                            ...book,
                            [myName]: newBody
                        }
                    } else {
                        return { ...book }
                    }
                })
            }
        })
    }

    patchEditBook = async (id, changedData) => {
        await fetch(`http://localhost:8082/api/books/cart/add/${id}`, {
            method: "PATCH",
            body: JSON.stringify(changedData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        this.setState(prevState => {
            return {
                books: prevState.books.map(book => {
                    return {
                        ...book,
                        editing: false
                    };
                })
            }
        })
    }

    patchEditBook = async (id, changedData) => {
        await fetch(`http://localhost:8082/api/books/cart/remove/${id}`, {
            method: "PATCH",
            body: JSON.stringify(changedData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        this.setState(prevState => {
            return {
                books: prevState.books.map(book => {
                    return {
                        ...book,
                        editing: false
                    };
                })
            }
        })
    }

    render() {
        const bookBeingEdited = this.state.books.find(book => book.editing)

        const editBook = e => {
            e.preventDefault();
            this.patchEditBook(bookBeingEdited.id, bookBeingEdited)
        }

        return (
            <div className="booklist-and-shopping-cart">
                <AdminBookList
                    books={this.state.books}
                    onDelete={this.deleteBook}
                    onEdit={this.onEditBook} />
                {bookBeingEdited &&
                    <div className="modal-container">
                        <form onSubmit={editBook} className="editBookForm">
                            <h1 className="editAddHeader">Edit Book</h1>
                            <div className="editBookDetails">
                                <label>Title</label>
                                <input 
                                    type="text"
                                    value={bookBeingEdited.title}
                                    onChange={this.handleBookChange}
                                    name="title"
                                />
                                <label>Subtitle</label>
                                <input
                                    type="text"
                                    value={bookBeingEdited.subtitle}
                                    onChange={this.handleBookChange}
                                    name="subtitle"
                                />
                                <label>Author</label>
                                <input
                                    type="text"
                                    value={bookBeingEdited.author}
                                    onChange={this.handleBookChange}
                                    name="author" 
                                />
                                <label>Published</label>
                                <input
                                    type="text"
                                    value={bookBeingEdited.published}
                                    onChange={this.handleBookChange}
                                    name="published" 
                                />
                                <label>Publisher</label>
                                <input
                                    type="text"
                                    value={bookBeingEdited.publisher}
                                    onChange={this.handleBookChange}
                                    name="publisher"
                                />
                                <label>Pages</label>
                                <input
                                    type="text"
                                    value={bookBeingEdited.pages}
                                    onChange={this.handleBookChange}
                                    name="pages" 
                                />
                                    <label>Decription</label>
                                <input
                                    type="text"
                                    value={bookBeingEdited.description}
                                    onChange={this.handleBookChange}
                                    name="description" 
                                />
                                <label>Website</label>
                                <input
                                    type="text"
                                    value={bookBeingEdited.website}
                                    onChange={this.handleBookChange}
                                    name="website" 
                                />
                                <label>InCart</label>
                                <input
                                    type="text"
                                    value={bookBeingEdited.inCart}
                                    onChange={this.handleBookChange}
                                    name="inCart" 
                                />
                                <label>Price</label>
                                <input
                                    type="text"
                                    value={bookBeingEdited.price}
                                    onChange={this.handleBookChange}
                                    name="price" 
                                />
                            </div>

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                }
                <AddBook onSubmit={this.addBook} />
            </div>
        )
    }
}

export default Admin;