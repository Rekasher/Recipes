import { Dish } from '../../types/dishType.ts';
import { DishCard } from '../../components/DishCard/DishCard.tsx';
import './FavoriteRecipesPage.css';
import NoInfo from '../../components/NoInfo/NoInfo.tsx';
import { useFavoriteContext } from '../../context/Favorite/FavoriteContext.tsx';

const FavoriteRecipesPage = () => {
  const { data } = useFavoriteContext();

  return !data || data.length === 0 ? (
    <NoInfo />
  ) : (
    <div className="card-grid">
      {data.map((dish: Dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export { FavoriteRecipesPage };
