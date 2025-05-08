import { FC, MouseEvent } from 'react';

import { useFavoriteContext } from '../../context/Favorite/FavoriteContext.tsx';
import { Dish } from '../../types/dishType.ts';
import './StarFavorite.css';
import { IconStar } from '@tabler/icons-react';

type PropStarFavorite = {
  dish: Dish;
};

const StarFavorite: FC<PropStarFavorite> = ({ dish }) => {
  const { putToFavorite } = useFavoriteContext();

  const handleToFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    putToFavorite(dish);
  };

  return (
    <div className="star-favorite" onClick={handleToFavorite}>
      <IconStar color="black" />
    </div>
  );
};

export { StarFavorite };
