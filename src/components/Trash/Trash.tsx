import { Dish } from '../../types/dishType.ts';
import { FC, MouseEvent } from 'react';
import './Trash.css';
import { IconTrash } from '../../Icons/Icons.tsx';
import { useFavoriteContext } from '../../context/Favorite/FavoriteContext.tsx';
import { useDeleteFavorite } from '../../hooks/useFavoriteDishes/useDeleteFavorite.ts';

type PropTrash = {
  dish: Dish;
};

const Trash: FC<PropTrash> = ({ dish }) => {
  const { setFavorite } = useFavoriteContext();

  const handleDeleteFromFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setFavorite(useDeleteFavorite(dish));
  };

  return (
    <div className="trash" onClick={handleDeleteFromFavorite}>
      <IconTrash color="black" />
    </div>
  );
};

export { Trash };
