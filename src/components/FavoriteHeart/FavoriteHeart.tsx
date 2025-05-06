import {RoutePath} from "../../routes/enum/routesEnum.ts";
import {useNavigate} from "react-router-dom";
import "./FavoriteHeart.css"
import {IconHeart} from "../../Icons/Icons.tsx";

const FavoriteHeart = () => {

    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    }

    return (
        <div className="favorite"
             onClick={() => handleNavigate(RoutePath.FAVORITE)}
             style={{cursor: "pointer"}}>
            <IconHeart color="black"/>
        </div>
    );
};

export {FavoriteHeart};