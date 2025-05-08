import { Dish } from '../../types/dishType.ts';
import { FC, MouseEvent } from 'react';
import './Trash.css';
import { IconTrash } from '../../Icons/Icons.tsx';
import { useDeleteFavoriteFromTheLocal } from '../../hooks/useFavoriteDishes/useDeleteFavoriteFromTheLocal.ts';

type PropTrash = {
  dish: Dish;
  onUpdate?: () => void;
};

const Trash: FC<PropTrash> = ({ dish, onUpdate }) => {
  const handleDeleteFromFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    useDeleteFavoriteFromTheLocal(dish);
    onUpdate && onUpdate();
  };

  return (
    <div className="trash" onClick={handleDeleteFromFavorite}>
      <IconTrash color="black" />
    </div>
  );
};

export { Trash };
