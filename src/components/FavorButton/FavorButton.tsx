import {Dish} from "../../types/dishType.ts";
import React from "react";
import {
    useDeleteFavoriteFromTheLocal,
    usePutFavoriteToLocal
} from "../../services/useFavoriteDishes/makeFavoriteDishes.ts";
import "./FavorButton.css"

type PropAddButton = {
    isFavor: boolean
    dish: Dish;
    onUpdate?: () => void;
}

const FavorButton: React.FC<PropAddButton> = ({isFavor ,dish, onUpdate}) => {

    const handleToFavorite = () => {
        isFavor ? useDeleteFavoriteFromTheLocal(dish) : usePutFavoriteToLocal(dish);
        if (onUpdate) onUpdate();
    }

    return (
        <button className="to-favorite" onClick={handleToFavorite}>{isFavor ? "Remove From Favorite": "Add Favorite" }</button>
    );
};

export {FavorButton};