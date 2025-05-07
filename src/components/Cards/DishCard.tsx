import './DishCard.css'
import {FC, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../routes/enum/routesEnum";
import {Dish} from "../../types/dishType";
import {StarFavorite} from "../StarFavorite/StarFavorite";
import {Trash} from "../Trash/Trash";
import {CardBackGroundColor, CardTextColor} from "./CardsEnum/CardEnum";
import {checkTheFavoriteDish} from "../../utils/checkFavoriteDish/checkTheFavoriteDish";
import {useGetFavoriteFromTheLocal} from "../../hooks/useFavoriteDishes/useGetFavoriteFromTheLocal";

type PropDishCard = {
    dish: Dish;
    onUpdate?: () => void;
}

const DishCard: FC<PropDishCard> = ({dish, onUpdate}) => {

    const {image_url, title, publisher, id} = dish;
    const navigate = useNavigate();
    const favoriteListDishes = useGetFavoriteFromTheLocal();
    const isFavorite = checkTheFavoriteDish(dish, favoriteListDishes);
    const color = isFavorite ? CardTextColor.FAVORITE : CardTextColor.STATIC;
    const backGroundColor = isFavorite ? CardBackGroundColor.FAVORITE : CardBackGroundColor.STATIC

    const navigationLink = useMemo(() => {
        return `${RoutePath.RECIPE}?id=${id}`
    }, [id]);

    return (
        <>
            <div className="card" onClick={() => navigate(navigationLink)}
                 style={{color: color, backgroundColor: backGroundColor}}>
                <div className="image-wrapper">
                    <img
                        src={image_url} alt="Image"
                        className="card-image"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">
                        {publisher}
                    </p>
                </div>
                <div className="card-actions">
                    {isFavorite ?
                        <Trash dish={dish} onUpdate={onUpdate}/>
                        :
                        <StarFavorite dish={dish} onUpdate={onUpdate}/>
                    }
                </div>
            </div>
        </>
    );
};

export {DishCard};