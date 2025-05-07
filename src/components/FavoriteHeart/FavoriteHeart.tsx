import {RoutePath} from "../../routes/enum/routesEnum";
import {useNavigate} from "react-router-dom";
import "./FavoriteHeart.css"
import {IconHeart} from "../../Icons/Icons";

const FavoriteHeart = () => {

    const navigate = useNavigate();

    return (
        <div
            className="favorite-heart"
            onClick={() => navigate(RoutePath.FAVORITE)}
        >
            <IconHeart color="black"/>
        </div>
    );
};

export {FavoriteHeart};