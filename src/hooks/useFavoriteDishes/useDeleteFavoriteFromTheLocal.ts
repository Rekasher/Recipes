import {Dish} from "../../types/dishType.ts";

const useDeleteFavoriteFromTheLocal = (dish: Dish) => {

    const FAVORITE_KEY = import.meta.env.VITE_FAVORITE_KEY;
    const storedFavorites = localStorage.getItem(FAVORITE_KEY);
    let favorList: Dish[] = storedFavorites ? JSON.parse(storedFavorites) : [];

    favorList = favorList.filter(item => item.id !== dish.id);
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorList));

    return favorList;
}

export {useDeleteFavoriteFromTheLocal}