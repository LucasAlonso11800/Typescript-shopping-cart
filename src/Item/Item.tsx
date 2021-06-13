import React, { useState } from 'react';
// Components
import { Button } from '@material-ui/core';
//Functions
import { handleAddToCart } from '../functions';
// Styles
import { Wrapper, Img, ItemInfo } from './Item.styles';
// Types
import { CartItemType } from '../Types';
// Recoil
import { useRecoilState } from 'recoil';
import { cartItems } from '../RecoilState';

type Props = { item: CartItemType };

const Item: React.FC<Props> = ({ item }) => {
    const [items, setItems] = useRecoilState(cartItems);
    
    return (
        <Wrapper>
            <Img src={item.image} alt={item.title} />
            <ItemInfo>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </ItemInfo>
            <Button onClick={() => handleAddToCart(item, setItems)}>Add to Cart</Button>
        </Wrapper>
    )
};

export default Item
