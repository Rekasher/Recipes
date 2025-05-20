import { FC } from 'react';

import { useFavoriteContext } from '../../context/Favorite/FavoriteContext.tsx';
import { useRecipeProvider } from '../../context/Recipe/RecipeContext.tsx';
import './FavorButton.css';

const FavorButton: FC = () => {
  const { data } = useRecipeProvider();
  const { isFavorite, putToFavorite, deleteFromFavorite, takeDish } = useFavoriteContext();
  const dish = takeDish(data!);

  const handleToFavorite = () => {
    if (isFavorite(dish!)) {
      deleteFromFavorite(dish!);
    } else {
      putToFavorite(dish!);
    }
  };

  return (
    <button className="to-favorite" onClick={handleToFavorite}>
      {isFavorite(dish!) ? 'Remove From Favorite' : 'Add Favorite'}
    </button>
  );
};

export { FavorButton };
