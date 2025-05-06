import {FC} from "react";
import "./MagGlass.css"
import {IconSearch} from "../../Icons/Icons.tsx";

type PropMagGlass = {
    callback: (() => void) | null;
}

const MagGlass: FC<PropMagGlass> = ({callback}) => {
    return (
        <div className='magGlass'
             style={{cursor: 'pointer'}}
             onClick={callback!}
        >
            <IconSearch color="black"/>
        </div>
    );
};

export {MagGlass};