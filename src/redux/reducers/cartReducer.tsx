import { ICart } from '../../types/ICart';

interface CartState {
  items: ICart[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (state = initialState, action: { type: string; payload?: any }): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_CART_ITEM':
      const { itemId } = action.payload;
      const updatedItems = state.items.filter(item => item.id !== itemId);
      return { 
        ...state, 
        items: updatedItems };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
