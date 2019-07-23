import React from 'react';
import BookList from './BookList';
import CartItem from './CartItem';
import './Book.css';

class Client extends React.Component {
    state = {
        books: [],
        search: ""
    }

    async componentDidMount() {
        // const response = await fetch(`${process.env.REACT_APP_API_URL}/books`);
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

    searchList = str => {
        this.setState({
            ...this.state,
            search: str
        })
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

        let searchedItem;
        const searchItem = str => {
            searchedItem = this.state.books.filter(book => {
                return book.title.toLowerCase().includes(str.toLowerCase()) || 
                    book.author.toLowerCase().includes(str.toLowerCase());
            });
        }

        searchItem(this.state.search);

        return(
            <div className="booklist-and-shopping-cart">
                <BookList
                    books={searchedItem}
                    itemsSearch={this.searchList}
                    addToCart={this.addItemToCart}
                />
                <CartItem 
                    cartItems={cartItems} 
                    removeFromCart={this.removeFromCart}
                />
            </div>
        )
    }
}

export default Client;