import { FC, PropsWithChildren, createContext, useContext } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useGetRecipe } from '../../hooks/useGetRecipeInfo/useGetRecipeInfo.tsx';
import { Recipe } from '../../types/recipeType.ts';

type RecipeContext = {
  data: Recipe | null;
  isLoading: boolean;
  error: Error | string | null;
};

const Context = createContext<RecipeContext>({
  data: null,
  isLoading: true,
  error: null,
});

const useRecipeProvider = () => useContext(Context);

const RecipeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchParams] = useSearchParams();
  const { data, isLoading, error } = useGetRecipe(searchParams.get('id') || '');

  return (
    <Context.Provider
      value={{
        data,
        isLoading,
        error,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { useRecipeProvider, RecipeProvider };
