import {useDeleteFavoriteFromTheLocal} from "../../../services/useFavoriteDishes/makeFavoriteDishes.ts";
import {Dish} from "../../../types/dishType.ts";
import React from "react";

type PropRemoveButton = {
    dish: Dish;
    onUpdate?: () => void;
}


const RemoveButton: React.FC<PropRemoveButton> = ({dish, onUpdate}) => {
    const handleFromFavorite = () => {
        useDeleteFavoriteFromTheLocal(dish);
        if (onUpdate) onUpdate();
    }

    return (
        <button className="to-favorite" onClick={handleFromFavorite}>Remove From Favorite</button>
    );
};

export {RemoveButton};