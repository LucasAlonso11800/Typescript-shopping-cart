import { CartItemType } from './Types';

export function getTotalItems(items: CartItemType[]) {
    return items.reduce((acc: number, item) => acc + item.amount, 0)
};

export function handleAddToCart(clickedItem: CartItemType, setItems: Function) {
    setItems((prev: CartItemType[]) => {
        const isItemInCart = prev.find(item => item.id === clickedItem.id);
        if (isItemInCart) {
            return prev.map(item => {
                return item.id === clickedItem.id
                    ? { ...item, amount: item.amount + 1 }
                    : item
            })
        };

        return [...prev, { ...clickedItem, amount: 1 }]
    });
};

export function handleRemoveFromCart(id: number, setItems: Function) {
    setItems((prev: CartItemType[]) => prev.reduce((acc, item) => {
        if (item.id !== id) return [...acc, item]

        if (item.amount === 1) return acc

        return [...acc, { ...item, amount: item.amount - 1 }]
    }, [] as CartItemType[]))
};

export function calculateTotal(items: CartItemType[]){
    return items.reduce((acc: number, item) => {
        return acc + item.amount * item.price
    }, 0)
};