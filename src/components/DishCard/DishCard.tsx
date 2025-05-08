import { FC, useMemo } from 'react';

import { useNavigate } from 'react-router-dom';

import { useFavoriteContext } from '../../context/Favorite/FavoriteContext.tsx';
import { RoutePath } from '../../routes/enum/routesEnum.ts';
import { Dish } from '../../types/dishType.ts';
import { StarFavorite } from '../StarFavorite/StarFavorite.tsx';
import { Trash } from '../Trash/Trash.tsx';
import './DishCard.css';
import { CardBackGroundColor } from './DishCardEnum/CardEnum.ts';

type PropDishCard = {
  dish: Dish;
};

const DishCard: FC<PropDishCard> = ({ dish }) => {
  const { image_url, title, publisher, id } = dish;
  const navigate = useNavigate();
  const { isFavorite } = useFavoriteContext();

  const backGroundColor = isFavorite(dish)
    ? CardBackGroundColor.FAVORITE
    : CardBackGroundColor.STATIC;

  const navigationLink = useMemo(() => {
    return `${RoutePath.RECIPE}?id=${id}`;
  }, [id]);

  return (
    <>
      <div
        className="card"
        onClick={() => navigate(navigationLink)}
        style={{ backgroundColor: backGroundColor }}
      >
        <div className="image-wrapper">
          <img src={image_url} alt="Image" className="card-image" />
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{publisher}</p>
        </div>
        <div className="card-actions">
          {isFavorite(dish) ? <Trash dish={dish} /> : <StarFavorite dish={dish} />}
        </div>
      </div>
    </>
  );
};

export { DishCard };
