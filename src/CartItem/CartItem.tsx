import React from 'react';
// Components
import { Button } from '@material-ui/core';
// Styles
import { Wrapper } from './CartItem.styles';
// Types
import { CartItemType } from '../Types';
// Functions
import { handleAddToCart, handleRemoveFromCart } from '../functions';

type Props = { item: CartItemType }

const CartItem: React.FC<Props> = ({ item }) => {
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div>
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div>
                    <Button size="small" 
                    disableElevation 
                    variant="contained" 
                    onClick={() => handleRemoveFromCart(item.id)}>-</Button>
                    <p>{item.amount}</p>
                    <Button size="small" 
                    disableElevation 
                    variant="contained" 
                    onClick={() => handleAddToCart(item)}>+</Button>
                </div>
            </div>
            <img src={item.image} alt={item.title} />
        </Wrapper>
    )
};

export default CartItem
