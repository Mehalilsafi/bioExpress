import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      addItemToCart: (product) => {
        set({ cartItems: [...get().cartItems, { ...product }] });
      },
      deleteItemFromCart: (productId) => {
        set({
          cartItems: get().cartItems.filter((item) => item.productId !== productId),
        });
      },
    }),
    {
      name: 'cart-storage', // Unique name for the storage
      storage: createJSONStorage(() => localStorage), 
    }
  )
);
const useStore = create((set, get) => ({
  counter: 1,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
  decreaseCounter: () => {
    set((state) => ({
      counter: state.counter > 1 ? state.counter - 1 : state.counter,
    }));
  },
}));
const useCategory = create((set) => ({
  categoryName: "",
  setCategory: (newCategoryName) => set({ categoryName: newCategoryName }),
}));

const useSelected = create((set) => ({
  selectedProducts: [],
  setSelectedProducts: (products) => set({ selectedProducts: products }),
  toggleSelectedProduct: (productId) => set((state) => {
    if (state.selectedProducts.includes(productId)) {
      return { selectedProducts: state.selectedProducts.filter(id => id !== productId) };
    } else {
      return { selectedProducts: [...state.selectedProducts, productId] };
    }
  }),
}));
export { useSelected };
export { useCartStore };
export { useStore };
export { useCategory };
