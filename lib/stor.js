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
export { useCartStore };
