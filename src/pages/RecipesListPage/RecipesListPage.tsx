import { DishCard } from '../../components/DishCard/DishCard.tsx';
import NoInfo from '../../components/NoInfo/NoInfo.tsx';
import { Spinner } from '../../components/Spinner/Spinner.tsx';
import { Dish } from '../../types/dishType.ts';
import './RecipesListPage.css';
import { useSearchParams } from 'react-router-dom';
import { useGetAllRecipes } from '../../hooks/useAllRecipes/useGetAllRecipes.ts';

const RecipesListPage = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading, error } = useGetAllRecipes(searchParams.get('value') || '');

  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (!data || data.length === 0) return <NoInfo />;

  return (
    <div className="card-grid">
      {data.map((dish: Dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export { RecipesListPage };
