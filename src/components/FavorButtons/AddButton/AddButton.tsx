import {Dish} from "../../../types/dishType.ts";
import React from "react";
import {usePutFavoriteToLocal} from "../../../services/useFavoriteDishes/makeFavoriteDishes.ts";

type PropAddButton = {
    dish: Dish;
    onUpdate?: () => void;
}

const AddButton: React.FC<PropAddButton> = ({dish, onUpdate}) => {

    const handleToFavorite = () => {
        usePutFavoriteToLocal(dish);
        if (onUpdate) onUpdate();
    }

    return (
        <button className="to-favorite" onClick={handleToFavorite}>Add Favorite</button>
    );
};

export {AddButton};