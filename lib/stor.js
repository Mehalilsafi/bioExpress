import { create } from "zustand";

const useCartStore = create((set,get) => ({
    cartItems: [],
    addItemToCart:(product)=>{
        set({ cartItems: [...get().cartItems, {...product}] });
        
    },
  
  }));
 export {useCartStore} ;