import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Components
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Item from './Item/Item';
// Styles
import './App.css'
import { Wrapper, StyledButton } from './App.styles';
// Functions
import { getTotalItems, handleAddToCart, handleRemoveFromCart } from './functions';
// Types
import { CartItemType } from './Types';
// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartOpen, cartItems } from './RecoilState';

function App() {
    const [cartIsOpen, setCartIsOpen] = useRecoilState(cartOpen);
    const items = useRecoilValue(cartItems);
    const [products, setProducts] = useState<CartItemType[]>();
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
        (async function fetch() {
            setIsLoading(true)
            const data = await (await axios.get('https://fakestoreapi.com/products')).data
            setProducts(data)
            setIsLoading(false)
        })();
    }, []);

    if (isLoading) return <LinearProgress />

    return (
        <Wrapper>
            <Drawer anchor='right' open={cartIsOpen} onClose={() => setCartIsOpen(false)}>
                Cart
            </Drawer>
            <StyledButton onClick={() => setCartIsOpen(true)}>
                <Badge color='error' badgeContent={getTotalItems(items)}>
                    <AddShoppingCartIcon />
                </Badge>
            </StyledButton>
            <Grid container spacing={4}>
                {products?.map(item => {
                    return <Grid item
                        key={item.id}
                        xs={12} sm={4}
                    >
                        <Item item={item} />
                    </Grid>
                })}
            </Grid>
        </Wrapper>
    );
};

export default App;
