import { Dish } from '../../types/dishType.ts';

const useGetFavorite = () => {
  const FAVORITE_KEY = import.meta.env.VITE_FAVORITE_KEY;
  const storedFavorites = localStorage.getItem(FAVORITE_KEY);
  let favorList: Dish[] = storedFavorites ? JSON.parse(storedFavorites) : [];

  return favorList;
};

export { useGetFavorite };
