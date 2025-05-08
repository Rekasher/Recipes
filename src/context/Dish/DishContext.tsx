import { createContext, type FC, PropsWithChildren, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetAllRecipes } from '../../hooks/useAllRecipes/useGetAllRecipes.ts';
import { Dish } from '../../types/dishType.ts';

type DishesContext = {
  data: Dish[] | null;
  isLoading: boolean;
  error: Error | string | null;
};

const Context = createContext<DishesContext>({
  data: null,
  isLoading: true,
  error: null,
});

const useDishesProvider = () => useContext(Context);

const DishesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchParams] = useSearchParams();
  const { data, isLoading, error } = useGetAllRecipes(searchParams.get('value') || '');

  return (
    <Context.Provider
      value={{
        data,
        isLoading,
        error: error && new Error(error),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { useDishesProvider, DishesProvider };
