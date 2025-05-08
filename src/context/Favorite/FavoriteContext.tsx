import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

import { Dish } from '../../types/dishType.ts';
import { FAVORITE_KEY } from '../../utils/constants.ts';
import { Recipe } from '../../types/recipeType.ts';

type FavoriteContext = {
  favorite: Dish[] | [];
  isFavorite: (data: Dish) => boolean;
  getFavorite: (data: Dish) => Dish[];
  putToFavorite: (data: Dish) => Dish[];
  deleteFromFavorite: (data: Dish) => Dish[];
  takeDish: (data: Recipe) => Dish | undefined;
};

const Context = createContext<FavoriteContext>({
  favorite: [],
  isFavorite: () => false,
  getFavorite: () => [],
  putToFavorite: () => [],
  deleteFromFavorite: () => [],
  takeDish: () => undefined,
});

const useFavoriteContext = () => useContext(Context);

const FavoriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const getFavorite = () => {
    const storedFavorites = localStorage.getItem(FAVORITE_KEY);
    let favorList: Dish[] = storedFavorites ? JSON.parse(storedFavorites) : [];

    return favorList;
  };

  const favoriteDishes = getFavorite();
  const [favorite, setFavorite] = useState<Dish[]>([]);

  const isFavorite = (dish: Dish): boolean => {
    return favorite.some((recipe) => recipe.id === dish.id);
  };

  const setLocalStorage = (favorList: Dish[]): void => {
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorList));
  };

  const putToFavorite = (dish: Dish) => {
    const favorList = getFavorite();

    if (!isFavorite(dish)) {
      favorList.push(dish);
      setFavorite(favorList);
      setLocalStorage(favorList);
    }

    return favorList;
  };

  const deleteFromFavorite = (dish: Dish) => {
    let favorList = getFavorite();

    favorList = favorList.filter((item) => item.id !== dish.id);
    setFavorite(favorList);
    setLocalStorage(favorList);

    return favorList;
  };

  const takeDish = (recipe: Recipe) => {
    return {
      image_url: recipe.image_url,
      title: recipe.title,
      publisher: recipe.publisher,
      id: recipe.id,
    };
  };

  useEffect(() => {
    if (JSON.stringify(favorite) !== JSON.stringify(favoriteDishes)) {
      setFavorite(favoriteDishes);
    }
  }, [favorite, favoriteDishes]);

  return (
    <Context.Provider
      value={{
        favorite,
        isFavorite,
        getFavorite,
        putToFavorite,
        deleteFromFavorite,
        takeDish,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { useFavoriteContext, FavoriteProvider };
