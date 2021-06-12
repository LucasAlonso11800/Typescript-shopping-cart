import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RecoilRoot } from 'recoil';
// Components
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import AddShoppingCarticon from '@material-ui/icons/AddShoppingCart';
import Item from './Item/Item';
// Styles
import './App.css'
import { Wrapper } from './App.styles';
// Functions
import { getTotalItems, handleAddToCart, handleRemoveFromCart } from './functions';
// Types
import { CartItemType } from './Types';

function App() {
    const [products, setProducts] = useState<CartItemType[]>();
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res.data)
                setIsLoading(false)
            })
    }, []);

    return (
        <RecoilRoot>
            {isLoading ? <LinearProgress /> :
                <Wrapper>
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
            }
        </RecoilRoot>
    );
};

export default App;
