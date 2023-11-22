import { ICart } from '../../types/ICart';

export const addToCart = (product: ICart) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = (productId: number) => ({
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

export const removeCartItem = (itemId: string) => {
  return {
    type: 'REMOVE_CART_ITEM',
    payload: {
      itemId,
    },
  };
};


