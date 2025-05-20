import { FC, MouseEvent } from 'react';

import { useFavoriteContext } from '../../context/Favorite/FavoriteContext.tsx';
import { Dish } from '../../types/dishType.ts';
import './Trash.css';
import { IconTrash } from '@tabler/icons-react';

type PropTrash = {
  dish: Dish;
};

const Trash: FC<PropTrash> = ({ dish }) => {
  const { deleteFromFavorite } = useFavoriteContext();

  const handleDeleteFromFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    deleteFromFavorite(dish);
  };

  return (
    <div className="trash" onClick={handleDeleteFromFavorite}>
      <IconTrash color="black" />
    </div>
  );
};

export { Trash };
