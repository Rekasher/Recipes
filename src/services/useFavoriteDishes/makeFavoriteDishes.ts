import {Dish} from "../../types/dishType.ts";

const favoriteKey = 'Favorite';

const checkTheFavoriteDishes = (dish: Dish, favorList: Dish[]): boolean => {
    return favorList.some(recipe => recipe.id === dish.id)
}

const usePutFavoriteToLocal = (dish: Dish) => {

    const storedFavorites = localStorage.getItem(favoriteKey);
    let favorList: Dish[] = storedFavorites ? JSON.parse(storedFavorites) : [];
    const alreadyExists = checkTheFavoriteDishes(dish, favorList);

    if (!alreadyExists) {
        favorList.push(dish);
        localStorage.setItem(favoriteKey, JSON.stringify(favorList));
    }

    return favorList;
}

const useDeleteFavoriteFromTheLocal = (dish: Dish) => {

    const storedFavorites = localStorage.getItem(favoriteKey);
    let favorList: Dish[] = storedFavorites ? JSON.parse(storedFavorites) : [];

    favorList = favorList.filter(item => item.id !== dish.id);
    localStorage.setItem(favoriteKey, JSON.stringify(favorList));

    return favorList;
}

const useGetFavoriteFromTheLocal = () => {

    const storedFavorites = localStorage.getItem(favoriteKey);
    let favorList: Dish[] = storedFavorites ? JSON.parse(storedFavorites) : [];

    return favorList;
}

export {checkTheFavoriteDishes, usePutFavoriteToLocal, useDeleteFavoriteFromTheLocal, useGetFavoriteFromTheLocal};