// store.tsx
import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';

// Defina a interface para o estado combinado
export interface RootState {
  cart: ReturnType<typeof cartReducer>; // Use ReturnType para obter o tipo do estado do cartReducer
}

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;

