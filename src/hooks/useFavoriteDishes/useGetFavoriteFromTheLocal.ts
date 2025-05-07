import {Dish} from "../../types/dishType.ts";

const useGetFavoriteFromTheLocal = () => {
    
    const FAVORITE_KEY = import.meta.env.VITE_FAVORITE_KEY;
    const storedFavorites = localStorage.getItem(FAVORITE_KEY);
    const favorList: Dish[] = storedFavorites ? JSON.parse(storedFavorites) : [];

    return favorList;
}

export {useGetFavoriteFromTheLocal};