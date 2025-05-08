import { RoutePath } from '../../routes/enum/routesEnum.ts';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { IconHome } from '../../Icons/Icons';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home" onClick={() => navigate(RoutePath.HOME)}>
      <IconHome color="black" />
    </div>
  );
};

export { Home };
