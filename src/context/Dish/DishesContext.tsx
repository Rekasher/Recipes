import { type FC, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useGetAllRecipes } from '../../hooks/useAllRecipes/useGetAllRecipes.ts';
import { Dish } from '../../types/dishType.ts';

type DishesContext = {
  dishes: Dish[] | null;
  isLoading: boolean;
  error: Error | string | null;
};

const Context = createContext<DishesContext>({
  dishes: null,
  isLoading: true,
  error: null,
});

const useDishesProvider = () => useContext(Context);

const DishesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [dishes, setDishes] = useState<Dish[] | null>(null);
  const [searchParams] = useSearchParams();
  const { data, isLoading, error } = useGetAllRecipes(searchParams.get('value') || '');

  useEffect(() => {
    if (data) {
      setDishes(data);
    }
  }, [data]);

  return (
    <Context.Provider
      value={{
        dishes,
        isLoading,
        error: error && new Error(error),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { useDishesProvider, DishesProvider };
