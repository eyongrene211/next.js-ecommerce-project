import { create } from 'zustand'
export const useStoreFav = create((set) => ({
  
    selectedFavIds: [],


    

    toggleFavItemId: (id) => { 
        set((state) => {
           
            const isFavAlreadySelected = state.selectedFavIds.includes(id);
            return {
                ...state,

                selectedFavIds: isFavAlreadySelected ? state.selectedFavIds.filter((item) => item != id)  //Remove if exist
                    : [...state.selectedFavIds, id] //Add if not exists
            };
        });
    },
   
    clearFavCart: () => {

        set(() => ({ selectedFavIds: [] }))
    }
}));

    