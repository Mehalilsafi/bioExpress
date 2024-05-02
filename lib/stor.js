import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cartItems: [],
  addItemToCart: (product) => {
    set({ cartItems: [...get().cartItems, { ...product }] });
  },
  deleteItemFromCart: (productId) => {
    set({
      cartItems: get().cartItems.filter((item) => item.productId !== productId),
    });
  },
}));
const useStore = create((set, get) => ({
  counter: 1,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
  decreaseCounter: () => {
    set((state) => ({
      counter: state.counter > 1 ? state.counter - 1 : state.counter,
    }));
  },
}));

export { useCartStore };
export { useStore };
