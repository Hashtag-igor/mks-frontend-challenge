// cartActions.tsx
import { ICart } from '../../types/ICart';

export const addToCart = (product: ICart) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = (productId: string) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId,
});

export const updateCartItem = (productId: string, quantity: number) => ({
  type: 'UPDATE_CART_ITEM',
  payload: {
    productId,
    quantity,
  },
});

export const removeCartItem = (itemId: string) => ({
  type: 'REMOVE_CART_ITEM',
  payload: {
    itemId,
  },
});

export const updateCartItemCount = () => ({
  type: 'UPDATE_CART_ITEM_COUNT',
});
