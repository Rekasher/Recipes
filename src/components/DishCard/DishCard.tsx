import { FC, useMemo } from 'react';

import { useNavigate } from 'react-router-dom';

import { useFavoriteContext } from '../../context/Favorite/FavoriteContext.tsx';
import { RoutePath } from '../../routes/enum/routesEnum.ts';
import { Dish } from '../../types/dishType.ts';
import { StarFavorite } from '../StarFavorite/StarFavorite.tsx';
import { Trash } from '../Trash/Trash.tsx';
import styles from './DishCard.module.css';

type PropDishCard = {
  dish: Dish;
};

const DishCard: FC<PropDishCard> = ({ dish }) => {
  const { image_url, title, publisher, id } = dish;
  const navigate = useNavigate();
  const { isFavorite } = useFavoriteContext();

  const backGroundColor = isFavorite(dish) ? styles.cardColorFavorite : styles.cardColorStatic;

  const navigationLink = useMemo(() => {
    return `${RoutePath.RECIPE}?id=${id}`;
  }, [id]);

  return (
    <>
      <div className={`${styles.card} ${backGroundColor}`} onClick={() => navigate(navigationLink)}>
        <div className={styles.imageWrapper}>
          <img src={image_url} alt="Image" className={styles.cardImage} />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardText}>{publisher}</p>
        </div>
        <div className={styles.cardActions}>
          {isFavorite(dish) ? <Trash dish={dish} /> : <StarFavorite dish={dish} />}
        </div>
      </div>
    </>
  );
};

export { DishCard };
