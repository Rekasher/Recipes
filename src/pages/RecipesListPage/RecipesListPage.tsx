import { DishCard } from '../../components/DishCard/DishCard.tsx';
import { Dish } from '../../types/dishType.ts';
import './RecipesListPage.css';
import NoInfo from '../../components/NoInfo/NoInfo.tsx';
import { Spinner } from '../../components/Spinner/Spinner.tsx';
import { useDishesProvider } from '../../context/Dish/DishesContext.tsx';

const RecipesListPage = () => {
  const { dish, isLoading, error } = useDishesProvider();

  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (!dish || dish.length === 0) return <NoInfo />;

  return (
    <div className="card-grid">
      {dish.map((dish: Dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export { RecipesListPage };
