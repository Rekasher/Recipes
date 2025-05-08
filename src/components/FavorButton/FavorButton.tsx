import { FC } from 'react';
import './FavorButton.css';
import { useFavoriteContext } from '../../context/Favorite/FavoriteContext.tsx';
import { useRecipeProvider } from '../../context/Recipe/RecipeContext.tsx';
import { useDeleteFavorite } from '../../hooks/useFavoriteDishes/useDeleteFavorite.ts';
import { usePutFavorite } from '../../hooks/useFavoriteDishes/usePutFavorite.ts';

const FavorButton: FC = () => {
  const { setFavorite } = useFavoriteContext();
  const { recipe: dish } = useRecipeProvider();
  const { isFavorite } = useFavoriteContext();

  const handleToFavorite = () => {
    isFavorite(dish!) ? setFavorite(useDeleteFavorite(dish!)) : setFavorite(usePutFavorite(dish!));
  };

  return (
    <button className="to-favorite" onClick={handleToFavorite}>
      {isFavorite(dish!) ? 'Remove From Favorite' : 'Add Favorite'}
    </button>
  );
};

export { FavorButton };
