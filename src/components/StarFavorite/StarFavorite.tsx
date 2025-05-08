import './StarFavorite.css';
import { FC, MouseEvent } from 'react';

import { IconStar } from '../../Icons/Icons.tsx';
import { usePutFavorite } from '../../hooks/useFavoriteDishes/usePutFavorite.ts';
import { Dish } from '../../types/dishType.ts';
import { useFavoriteContext } from '../../context/Favorite/FavoriteContext.tsx';

type PropStarFavorite = {
  dish: Dish;
};

const StarFavorite: FC<PropStarFavorite> = ({ dish }) => {
  const { setFavorite } = useFavoriteContext();

  const handleToFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setFavorite(usePutFavorite(dish));
  };

  return (
    <div className="star-favorite" onClick={handleToFavorite}>
      <IconStar color="black" />
    </div>
  );
};

export { StarFavorite };
