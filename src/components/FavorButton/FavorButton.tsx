import {Dish} from "../../types/dishType";
import {FC} from "react";
import "./FavorButton.css"
import {useDeleteFavoriteFromTheLocal} from "../../hooks/useFavoriteDishes/useDeleteFavoriteFromTheLocal";
import {usePutFavoriteToLocal} from "../../hooks/useFavoriteDishes/usePutFavoriteToLocal";

type PropAddButton = {
    isFavor: boolean
    dish: Dish;
    onUpdate?: () => void;
}

const FavorButton: FC<PropAddButton> = ({isFavor ,dish, onUpdate}) => {

    const handleToFavorite = () => {
        isFavor ? useDeleteFavoriteFromTheLocal(dish) : usePutFavoriteToLocal(dish);
        onUpdate && onUpdate();
    }

    return (
        <button className="to-favorite" onClick={handleToFavorite}>{isFavor ? "Remove From Favorite": "Add Favorite" }</button>
    );
};

export {FavorButton};