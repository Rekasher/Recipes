import './StarFavorite.css';
import { FC, MouseEvent } from 'react';

import { IconStar } from '../../Icons/Icons.tsx';
import { usePutFavoriteToLocal } from '../../hooks/useFavoriteDishes/usePutFavoriteToLocal.ts';
import { Dish } from '../../types/dishType.ts';

type PropStarFavorite = {
  dish: Dish;
  onUpdate?: () => void;
};

const StarFavorite: FC<PropStarFavorite> = ({ dish, onUpdate }) => {
  const handleToFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    usePutFavoriteToLocal(dish);
    onUpdate && onUpdate();
  };

  return (
    <div className="star-favorite" onClick={handleToFavorite}>
      <IconStar color="black" />
    </div>
  );
};

export { StarFavorite };
