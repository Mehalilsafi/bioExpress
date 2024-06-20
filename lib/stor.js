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


const useQuantity = create((set) => ({
  counters: {},
  increment: (productId, maxQuantity) => set((state) => {
    const newCount = state.counters[productId] ? state.counters[productId] + 1 : 1;
    if (newCount <= maxQuantity) {
      return { counters: { ...state.counters, [productId]: newCount } };
    } else {
      return state;
    }
  }),
  decrement: (productId) => set((state) => {
    const newCount = state.counters[productId] ? state.counters[productId] - 1 : 0;
    if (newCount >= 0) {
      return { counters: { ...state.counters, [productId]: newCount } };
    } else {
      return state;
    }
  }),
}));

export  {useQuantity};
export { useSelected };
export { useCartStore };
export { useStore };
export { useCategory };
