import { Dish } from '../../types/dishType';
import { FC } from 'react';
import './FavorButton.css';
import { useDeleteFavorite } from '../../hooks/useFavoriteDishes/useDeleteFavorite.ts';
import { usePutFavorite } from '../../hooks/useFavoriteDishes/usePutFavorite.ts';

type PropAddButton = {
  isFavor: boolean;
  dish: Dish;
  onUpdate?: () => void;
};

const FavorButton: FC<PropAddButton> = ({ isFavor, dish, onUpdate }) => {
  const handleToFavorite = () => {
    isFavor ? useDeleteFavorite(dish) : usePutFavorite(dish);
    onUpdate && onUpdate();
  };

  return (
    <button className="to-favorite" onClick={handleToFavorite}>
      {isFavor ? 'Remove From Favorite' : 'Add Favorite'}
    </button>
  );
};

export { FavorButton };
