import { FC } from 'react';

import './MagGlass.css';
import { IconSearch } from '@tabler/icons-react';

type PropMagGlass = {
  callback: () => void;
};

const MagGlass: FC<PropMagGlass> = ({ callback }) => {
  return (
    <div className="mag-glass" onClick={callback}>
      <IconSearch color="black" />
    </div>
  );
};

export { MagGlass };
