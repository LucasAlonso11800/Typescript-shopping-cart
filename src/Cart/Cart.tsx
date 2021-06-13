import React from 'react';
// Components
import CartItem from '../CartItem/CartItem';
// Styles
import { Wrapper, CartTitle } from './Cart.styles';
// Types
import { CartItemType } from '../Types';
// Functions
import { calculateTotal } from '../functions';

type Props = { cartItems: CartItemType[] }

const Cart: React.FC<Props> = ({ cartItems }) => {
    return (
        <Wrapper>
            <CartTitle>Your Shopping Cart</CartTitle>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => {
                return <CartItem key={item.id} item={item}/>
            })}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
};

export default Cart