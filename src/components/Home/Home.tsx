import { useNavigate } from 'react-router-dom';

import { RoutePath } from '../../routes/enum/routesEnum.ts';
import './Home.css';
import { IconHome } from '@tabler/icons-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home" onClick={() => navigate(RoutePath.HOME)}>
      <IconHome color="black" />
    </div>
  );
};

export { Home };
