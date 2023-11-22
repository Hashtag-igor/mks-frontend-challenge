import { ICart } from '../../types/ICart';

interface CartState {
  items: ICart[];
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  itemCount: 0,
};

const cartReducer = (state = initialState, action: { type: string; payload?: any }): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { payload: product } = action;

      // Verificar se o produto já está no carrinho
      const isProductInCart = state.items.some((item) => item.id === product.id);

      if (!isProductInCart) {
        return {
          ...state,
          items: [...state.items, product],
          itemCount: state.itemCount + 1,
        };
      }

      return state;

    case 'REMOVE_CART_ITEM':
      const { itemId } = action.payload;
      const updatedItems = state.items.filter((item) => item.id !== itemId);

      return {
        ...state,
        items: updatedItems,
        itemCount: state.itemCount - 1,
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return {
        ...state,
        itemCount: state.items.length,
      };
  }
};

export default cartReducer;
