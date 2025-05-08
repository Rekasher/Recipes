import { DishCard } from '../../components/DishCard/DishCard.tsx';
import NoInfo from '../../components/NoInfo/NoInfo.tsx';
import { useFavoriteContext } from '../../context/Favorite/FavoriteContext.tsx';
import { Dish } from '../../types/dishType.ts';
import './FavoriteRecipesPage.css';

const FavoriteRecipesPage = () => {
  const { favorite } = useFavoriteContext();

  if (!favorite || favorite.length === 0) return <NoInfo />;

  return (
    <div className="card-grid">
      {favorite.map((dish: Dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export { FavoriteRecipesPage };
