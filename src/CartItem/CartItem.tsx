import React from 'react';
// Components
import { Button } from '@material-ui/core';
// Styles
import { Wrapper, ItemTitle, ItemInfo, Buttons, Img } from './CartItem.styles';
// Types
import { CartItemType } from '../Types';
// Functions
import { handleAddToCart, handleRemoveFromCart } from '../functions';
// Recoil
import { useRecoilState } from 'recoil';
import { cartItems } from '../RecoilState';

type Props = { item: CartItemType }

const CartItem: React.FC<Props> = ({ item }) => {
    const [items, setItems] = useRecoilState(cartItems);

    return (
        <Wrapper>
            <div>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemInfo>
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                </ItemInfo>
                <Buttons>
                    <Button size="small" 
                    disableElevation 
                    variant="contained" 
                    onClick={() => handleRemoveFromCart(item.id, setItems)}>-</Button>
                    <p>{item.amount}</p>
                    <Button size="small" 
                    disableElevation 
                    variant="contained" 
                    onClick={() => handleAddToCart(item, setItems)}>+</Button>
                </Buttons>
            </div>
            <Img src={item.image} alt={item.title} />
        </Wrapper>
    )
};

export default CartItem
