import { create } from 'zustand';

const useStore = create((set, get) => ({
  cart: {},
  addItem: (item) => set((state) => {
    const existingItem = state.cart[item.id];
    const updatedCart = {
      ...state.cart,
      [item.id]: existingItem
        ? { ...existingItem, count: existingItem.count + 1 }
        : { ...item, count: 1 },
    };
    return { cart: updatedCart };
  }),
  incrementItem: (id) => set((state) => {
    const updatedCart = {
      ...state.cart,
      [id]: { ...state.cart[id], count: state.cart[id].count + 1 },
    };
    return { cart: updatedCart };
  }),
  decrementItem: (id) => set((state) => {
    const updatedCart = {
      ...state.cart,
      [id]: { ...state.cart[id], count: state.cart[id].count - 1 },
    };
    if (updatedCart[id].count === 0) delete updatedCart[id];
    return { cart: updatedCart };
  }),
  removeItem: (id) => set((state) => {
    const updatedCart = { ...state.cart };
    delete updatedCart[id];
    return { cart: updatedCart };
  }),
  getTotalCount: () => {
    return Object.values(get().cart).reduce((acc, item) => acc + item.count, 0);
  },
  getTotalPrice: () => {
    return Object.values(get().cart).reduce((acc, item) => acc + item.price * item.count, 0);
  },
}));

export default useStore;

