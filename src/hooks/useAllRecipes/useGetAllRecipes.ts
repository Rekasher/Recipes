import { useEffect, useState } from 'react';
import { getAllRecipes } from '../../api/AllRecipes/AllRecipes.ts';

const useGetAllRecipes = (search: string) => {
  const [dishesData, setDishesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (!search) return;

    setIsLoading(true);
    setError(null);

    getAllRecipes(search)
      .then((info) => {
        setDishesData(info!.data!.recipes);
      })
      .catch((err: Error) => {
        setError(err?.message || 'Failed request');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);

  return { data: dishesData, isLoading, error };
};

export { useGetAllRecipes };
