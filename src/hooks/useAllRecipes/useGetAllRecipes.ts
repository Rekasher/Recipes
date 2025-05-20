import { useQuery } from '@tanstack/react-query';
import { getAllRecipes } from '../../api/AllRecipes/AllRecipes.ts';

const useGetAllRecipes = (dish: string) => {
  return useQuery({
    queryKey: ['get-all-recipes', dish],
    queryFn: () => getAllRecipes(dish),
    enabled: !!dish,
  });
};

export { useGetAllRecipes };
