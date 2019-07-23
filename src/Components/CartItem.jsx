import React from 'react';

function CartItem ({ cartItems, removeFromCart }) {
    let totalPrice = 0;
    const cartItem = cartItems.map(item => {
        totalPrice += item.price * item.inCart;
        return (
            <tbody>
                <td key={item.id}>{item.title}</td>
                <td>{item.author}</td>
                <td>${item.price}</td>
                <td>{item.inCart}</td>
                <td>
                    <button 
                        style={{color: 'red', width: '4em'}} 
                        onClick={() => removeFromCart(item.id) }>Delete</button>
                </td>
            </tbody>
        )
    })

    return (
        <div>
            <h2 style={{ textAlign: "center", marginTop: '1em'}}>Shopping Cart</h2>
            <h3>Total: ${totalPrice}</h3>
            <table className="table table-hover"> 
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                    {totalPrice !== 0 ? cartItem : 'No Item in your shopping cart.'}
            </table>
        </div>
    )
}

export default CartItem;