import { useQuery } from '@tanstack/react-query';
import { getRecipeInfo } from '../../api/CurrentRecipe/CurrentRecipe.ts';

const useGetRecipe = (id: string) => {
  return useQuery({
    queryKey: ['get-all-recipes', id],
    queryFn: () => getRecipeInfo(id),
    enabled: !!id,
  });
};

export { useGetRecipe };
