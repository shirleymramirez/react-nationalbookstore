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
                    <div className="modal-container white-text-color">
                        <h1>Edit Book</h1>
                        <form onSubmit={editBook}>
                            <div>
                                <div>
                                    <label>Title</label>
                                </div>
                                <div>
                                    <input type="text"
                                        value={bookBeingEdited.title}
                                        onChange={this.handleBookChange}
                                        name="title"
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Body</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={bookBeingEdited.body}
                                        onChange={this.handleBookChange}
                                        name="body"
                                    />
                                </div>
                            </div>
                            <div>
                                <input type="submit" value="Submit" />
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