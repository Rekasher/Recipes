import "./StarFavorite.css"
import {Dish} from "../../types/dishType.ts";
import React from "react";
import {usePutFavoriteToLocal} from "../../services/useFavoriteDishes/makeFavoriteDishes.ts";
import {IconStar} from "../../Icons/Icons.tsx";

type PropStarFavorite = {
    dish: Dish
    onUpdate?: () => void;
}

const StarFavorite: React.FC<PropStarFavorite> = ({dish, onUpdate}) => {

    const handleToFavorite = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        usePutFavoriteToLocal(dish)
        if (onUpdate) onUpdate();
    };

    return (
        <div className="star-favorite" onClick={handleToFavorite}>
            <IconStar color="black"/>
        </div>
    );
};

export {StarFavorite};