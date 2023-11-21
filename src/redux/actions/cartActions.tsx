import { ICart } from '../../types/ICart';

export const addToCart = (product: ICart) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = (productId: number) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId,
});
