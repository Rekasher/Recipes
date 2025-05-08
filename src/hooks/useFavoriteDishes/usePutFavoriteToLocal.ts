import { Dish } from '../../types/dishType.ts';
import { checkTheFavoriteDish } from '../../utils/checkFavoriteDish/checkTheFavoriteDish.ts';

const usePutFavoriteToLocal = (dish: Dish) => {
  const FAVORITE_KEY = import.meta.env.VITE_FAVORITE_KEY;
  const storedFavorites = localStorage.getItem(FAVORITE_KEY);
  const favorList: Dish[] = storedFavorites ? JSON.parse(storedFavorites) : [];
  const alreadyExists = checkTheFavoriteDish(dish, favorList);

  if (!alreadyExists) {
    favorList.push(dish);
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorList));
  }

  return favorList;
};

export { usePutFavoriteToLocal };
