import './DishCard.css';
import { FC, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../routes/enum/routesEnum.ts';
import { Dish } from '../../types/dishType.ts';
import { checkTheFavoriteDish } from '../../utils/checkFavoriteDish/checkTheFavoriteDish.ts';
import { StarFavorite } from '../StarFavorite/StarFavorite.tsx';
import { Trash } from '../Trash/Trash.tsx';
import { CardBackGroundColor, CardTextColor } from './DishCardEnum/CardEnum.ts';
import { useFavoriteContext } from '../../context/Favorite/FavoriteContext.tsx';

type PropDishCard = {
  dish: Dish;
};

const DishCard: FC<PropDishCard> = ({ dish }) => {
  const { image_url, title, publisher, id } = dish;
  const navigate = useNavigate();
  const { data } = useFavoriteContext();

  const isFavorite = checkTheFavoriteDish(dish, data);
  const color = isFavorite ? CardTextColor.FAVORITE : CardTextColor.STATIC;
  const backGroundColor = isFavorite ? CardBackGroundColor.FAVORITE : CardBackGroundColor.STATIC;

  const navigationLink = useMemo(() => {
    return `${RoutePath.RECIPE}?id=${id}`;
  }, [id]);

  return (
    <>
      <div
        className="card"
        onClick={() => navigate(navigationLink)}
        style={{ color: color, backgroundColor: backGroundColor }}
      >
        <div className="image-wrapper">
          <img src={image_url} alt="Image" className="card-image" />
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{publisher}</p>
        </div>
        <div className="card-actions">
          {isFavorite ? <Trash dish={dish} /> : <StarFavorite dish={dish} />}
        </div>
      </div>
    </>
  );
};

export { DishCard };
