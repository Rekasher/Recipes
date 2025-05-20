import { FC } from 'react';

import { useFavoriteContext } from '../../context/Favorite/FavoriteContext.tsx';
import './FavorButton.css';
import { useGetRecipe } from '../../hooks/useGetRecipeInfo/useGetRecipeInfo.ts';
import { useSearchParams } from 'react-router-dom';

const FavorButton: FC = () => {
  const [searchParams] = useSearchParams();
  const { data } = useGetRecipe(searchParams.get('id') || '');
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
