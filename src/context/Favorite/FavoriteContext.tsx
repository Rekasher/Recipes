import { Dish } from '../../types/dishType.ts';
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useGetFavorite } from '../../hooks/useFavoriteDishes/useGetFavorite.ts';

type FavoriteContext = {
  data: Dish[] | [];
  setData: (data: Dish[]) => void;
};

const Context = createContext<FavoriteContext>({
  data: [],
  setData: () => {},
});

const useFavoriteContext = () => useContext(Context);

const FavoriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const favorites = useGetFavorite();
  const [data, setData] = useState<Dish[]>([]);

  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(favorites)) {
      setData(favorites);
    }
  }, [favorites]);

  return (
    <Context.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { useFavoriteContext, FavoriteProvider };
