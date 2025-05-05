import './DishCard.css'
import React from "react";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../routes/enum/routesEnum.ts";
import {Dish} from "../../types/dishType.ts";
import {StarFavorite} from "../StarFavorite/StarFavorite.tsx";
import {Trash} from "../Trash/Trash.tsx";
import {
    checkTheFavoriteDishes,
    useGetFavoriteFromTheLocal
} from "../../services/useFavoriteDishes/makeFavoriteDishes.ts";
import {CardBackGroundColor, CardTextColor} from "./Cards-enum/CardEnum.ts";

type PropDishCard = {
    dish: Dish;
    onUpdate?: () => void;
}

const DishCard: React.FC<PropDishCard> = ({dish, onUpdate}) => {
    const {image_url, title, publisher, id} = dish;
    const navigate = useNavigate();
    const favoriteListDishes = useGetFavoriteFromTheLocal();
    const isFavorite = checkTheFavoriteDishes(dish, favoriteListDishes);
    const color = isFavorite ? CardTextColor.FAVORITE : CardTextColor.STATIC;
    const backGroundColor = isFavorite ? CardBackGroundColor.FAVORITE : CardBackGroundColor.STATIC


    const handleNavigate = (path: string) => {

        navigate(path, {state: {id: id}});
    }

    return (
        <>
            <div className="card" onClick={() => handleNavigate(RoutePath.RECIPE)}
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
                    {!isFavorite ?
                        <StarFavorite dish={dish} onUpdate={onUpdate}/>
                        :
                        <Trash dish={dish} onUpdate={onUpdate}/>
                    }
                </div>
            </div>
        </>
    );
};

export {DishCard};