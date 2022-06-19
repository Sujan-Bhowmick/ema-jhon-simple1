import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const{cart} = props;
    console.log(props.children)
    let total = 0;
    let shipping = 0
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2)
    const tax1 = parseFloat(tax)
    const grandTotal = total + shipping + tax1;

    return (
        <div className='cart'>
            <h4>Order Summary </h4>
             <p>Selected items: {quantity}</p>
             <p>Total Price: ${total} </p>
             <p>Total Shipping: ${shipping} </p>
             <p>Tax:${tax1} </p>
             <h5>Grand Total:${grandTotal} </h5>
             {props.children}
        </div>
    );
};

export default Cart;