import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useGetFavorite } from '../../hooks/useFavoriteDishes/useGetFavorite.ts';
import { Dish } from '../../types/dishType.ts';
import { checkTheFavoriteDish } from '../../utils/checkFavoriteDish/checkTheFavoriteDish.ts';

type FavoriteContext = {
  favorite: Dish[] | [];
  setFavorite: (data: Dish[]) => void;
  isFavorite: (data: Dish) => boolean;
};

const Context = createContext<FavoriteContext>({
  favorite: [],
  setFavorite: () => {},
  isFavorite: () => false,
});

const useFavoriteContext = () => useContext(Context);

const FavoriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const favoriteDishes = useGetFavorite();
  const [favorite, setFavorite] = useState<Dish[]>([]);

  useEffect(() => {
    if (JSON.stringify(favorite) !== JSON.stringify(favoriteDishes)) {
      setFavorite(favoriteDishes);
    }
  }, [favoriteDishes]);

  const isFavorite = (dish: Dish) => {
    return checkTheFavoriteDish(dish, favorite);
  };

  return (
    <Context.Provider
      value={{
        favorite,
        setFavorite,
        isFavorite,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { useFavoriteContext, FavoriteProvider };
