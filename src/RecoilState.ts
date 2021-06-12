import { atom } from 'recoil';
import { CartItemType } from './Types';

export const cartOpen = atom({
    key: 'cartOpen',
    default: false
});

export const cartItems = atom({
    key: 'cartItems',
    default: [] as CartItemType[]
});