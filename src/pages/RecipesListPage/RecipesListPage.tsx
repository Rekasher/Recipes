import { DishCard } from '../../components/DishCard/DishCard.tsx';
import NoInfo from '../../components/NoInfo/NoInfo.tsx';
import { Spinner } from '../../components/Spinner/Spinner.tsx';
import { useDishesProvider } from '../../context/Dish/DishesContext.tsx';
import { Dish } from '../../types/dishType.ts';
import './RecipesListPage.css';

const RecipesListPage = () => {
  const { dishes, isLoading, error } = useDishesProvider();

  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (!dishes || dishes.length === 0) return <NoInfo />;

  return (
    <div className="card-grid">
      {dishes.map((dish: Dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export { RecipesListPage };
