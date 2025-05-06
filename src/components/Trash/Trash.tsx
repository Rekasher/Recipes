import {Dish} from "../../types/dishType.ts";
import React from "react";
import {useDeleteFavoriteFromTheLocal} from "../../services/useFavoriteDishes/makeFavoriteDishes.ts";
import './Trash.css'
import {IconTrash} from "../../Icons/Icons.tsx"

type PropTrash = {
    dish: Dish;
    onUpdate?: () => void;
}

const Trash: React.FC<PropTrash> = ({dish, onUpdate}) => {

    const handleDeleteFromFavorite = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        useDeleteFavoriteFromTheLocal(dish);
        if (onUpdate) onUpdate();
    };


    return (
        <div className="trash" onClick={handleDeleteFromFavorite}>
            <IconTrash color="black"/>
        </div>
    );
};

export {Trash};