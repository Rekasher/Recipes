import { DishCard } from '../../components/DishCard/DishCard.tsx';
import { Dish } from '../../types/dishType.ts';
import './RecipesListPage.css';
import { useEffect, useState } from 'react';
import NoInfo from '../../components/NoInfo/NoInfo.tsx';
import { Spinner } from '../../components/Spinner/Spinner.tsx';
import { useDishesProvider } from '../../context/Dish/DishContext.tsx';

const RecipesListPage = () => {
  const [dishesInfo, setDishesInfo] = useState<Dish[]>([]);

  const { data, isLoading, error } = useDishesProvider();

  useEffect(() => {
    if (data) {
      setDishesInfo(data);
    }
  }, [data]);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (!dishesInfo || dishesInfo.length === 0) return <NoInfo />;

  return (
    <div className="card-grid">
      {dishesInfo.map((dish: Dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export { RecipesListPage };
