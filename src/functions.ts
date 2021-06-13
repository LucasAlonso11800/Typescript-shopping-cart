import { CartItemType } from './Types';

export function getTotalItems(items: CartItemType[]) {
    return items.reduce((acc: number, item) => acc + item.amount, 0)
};

export function handleAddToCart(clickedItem: CartItemType) {
    return null
};

export function handleRemoveFromCart(id: number) {
    return id
}
