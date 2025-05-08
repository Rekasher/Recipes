import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetRecipe } from '../../hooks/useGetRecipeInfo/useGetRecipeInfo.tsx';
import { Recipe } from '../../types/recipeType.ts';

type RecipeContext = {
  recipe: Recipe | null;
  isLoading: boolean;
  error: Error | string | null;
};

const Context = createContext<RecipeContext>({
  recipe: null,
  isLoading: true,
  error: null,
});

const useRecipeProvider = () => useContext(Context);

const RecipeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchParams] = useSearchParams();
  const { data: recipe, isLoading, error } = useGetRecipe(searchParams.get('id') || '');

  return (
    <Context.Provider
      value={{
        recipe,
        isLoading,
        error,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { useRecipeProvider, RecipeProvider };
