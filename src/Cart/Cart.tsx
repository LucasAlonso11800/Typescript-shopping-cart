import React from 'react';
// Components
import CartItem from '../CartItem/CartItem';
// Styles
import { Wrapper } from './Cart.styles';
// Types
import { CartItemType } from '../Types';
// Functions
import { handleAddToCart, handleRemoveFromCart } from '../functions';

type Props = { cartItems: CartItemType[] }

const Cart: React.FC<Props> = ({ cartItems }) => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => {
                return <CartItem key={item.id} item={item}/>
            })}
        </Wrapper>
    )
};

export default Cart
