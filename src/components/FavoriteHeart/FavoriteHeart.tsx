import { useNavigate } from 'react-router-dom';

import { RoutePath } from '../../routes/enum/routesEnum';
import './FavoriteHeart.css';
import { IconHeart } from '@tabler/icons-react';

const FavoriteHeart = () => {
  const navigate = useNavigate();

  return (
    <div className="favorite-heart" onClick={() => navigate(RoutePath.FAVORITE)}>
      <IconHeart color="black" />
    </div>
  );
};

export { FavoriteHeart };
