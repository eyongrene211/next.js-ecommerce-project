import { removeItem } from 'framer-motion';
import { create }     from 'zustand'
export const useStoreCart = create((set) => ({
cartItems: [],

toggleItem: (product) =>
set((state) => {
const existing = state.cartItems.find((item) => item.id === product.id);
if (existing) {
return {
cartItems: state.cartItems.filter((item) => item.id !== product.id),
};
} else {
return {
cartItems: [...state.cartItems, { ...product, quantity: 1 }],
};
}
}),

removeItem: (id) =>
set((state) => ({
cartItems: state.cartItems.filter((item) => item.id !== id),
})),

clearCart: () => set({ cartItems: [] }),

increaseQty: (id) =>
set((state) => ({
cartItems: state.cartItems.map((item) =>
item.id === id ? { ...item, quantity: item.quantity + 1 } : item
),
})),

decreaseQty: (id) =>
set((state) => ({
cartItems: state.cartItems.map((item) =>
item.id === id && item.quantity > 1
? { ...item, quantity: item.quantity - 1 }
: item
),
})),
}));
// export const useStoreCart = create((set) => ({
//     selectedIds: [],
   


//     toggleItemId: (id) => { 
//         set((state) => {
//             const isAlreadySelected = state.selectedIds.includes(id);
//             return {
//                 ...state,
//                 selectedIds: isAlreadySelected ? state.selectedIds.filter((item) => item != id)  //Remove if exist
//                     : [...state.selectedIds, id], //Add if not exists
               
                 
//             };
//         });
//     },
//      removeItem: (id) => {
//          set((state) => {
//              return {
//                  ...state,
//                  selectedIds: state.selectedIds.filter((item) => item != id)
//              };
//          })
//     },

   
//     clearCart: () => {
//         set(() => ({ selectedIds: [] }))
       
//     },

   
  
// }));


   

