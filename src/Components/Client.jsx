import React from 'react';
import BookList from './BookList';
import CartItem from './CartItem';
import './Book.css';

class Client extends React.Component {
    state = {
        books: [],
        searchItem: ""
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8082/api/books');
        const json = await response.json();
        this.setState({
            books: json.map(book => {
                return {
                    ...book,
                    inCart: 0
                }
            })
        });
    }

    onSearchSubmit = (e) => {
        const value = e.target.value
        this.setState({
            search: value
        })
    }

    getBooks = () => {
        if (this.state.search) {
            return this.state.books.filter(book =>
                book.author.toLowerCase() === this.state.search.toLowerCase() ||
                book.title.toLowerCase() === this.state.search.toLowerCase()
            )
        } else {
            return this.state.books
        }
    }

    addItemToCart = (id) => {
        this.setState(prevState => {
            return {
                books: prevState.books.map(book => {
                    return {
                        ...book,
                        inCart: book.id === id ? book.inCart + 1 : book.inCart
                    }
                })
            }
        })
    }

    removeFromCart = (id) => {
        this.setState({
            books: this.state.books.map(book => {
                return {
                    ...book,
                    inCart: book.id === id ? book.inCart = 0 : book.inCart
                }
            })
        })
    }


    render() {
        const  cartItems = this.state.books.filter(item => {
            return item.inCart > 0
        });

        return(
            <div className="booklist-and-shopping-cart">
                <BookList
                    books={this.getBooks()}
                    addToCart={this.addItemToCart}
                    onSearchSubmit={this.onSearchSubmit}
                    search={this.state.search} />
                <CartItem 
                    cartItems={cartItems} 
                    removeFromCart={this.removeFromCart}
                />
            </div>
        )
    }
}

export default Client;