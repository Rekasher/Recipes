import { FC } from 'react';
import './MagGlass.css';
import { IconSearch } from '../../Icons/Icons.tsx';

type PropMagGlass = {
  callback: () => void;
};

const MagGlass: FC<PropMagGlass> = ({ callback }) => {
  return (
    <div className="magGlass" onClick={callback}>
      <IconSearch color="black" />
    </div>
  );
};

export { MagGlass };
