import { useEffect, useState } from 'react';
import { getAllRecipes } from '../../api/AllRecipes/AllRecipes.ts';

const useGetAllRecipes = (search: string) => {
  const [dishesData, setDishesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (!search) return;

    setLoading(true);
    setError(null);

    getAllRecipes(search)
      .then((info) => {
        setDishesData(info!.data!.recipes);
      })
      .catch((err: Error) => {
        setError(err?.message || 'Failed request');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  return { data: dishesData, loading, error };
};

export { useGetAllRecipes };
