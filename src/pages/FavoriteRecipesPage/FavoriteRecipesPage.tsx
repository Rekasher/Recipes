import {Dish} from "../../types/dishType.ts";
import {DishCard} from "../../components/Cards/DishCard.tsx";
import {useEffect, useState} from "react";
import "./FavoriteRecipesPage.css"
import {useGetFavoriteFromTheLocal} from "../../hooks/useFavoriteDishes/useGetFavoriteFromTheLocal.ts";
import NoInfo from "../../components/NoInfo/NoInfo.tsx";

const FavoriteRecipesPage = () => {

    const favorites = useGetFavoriteFromTheLocal();
    const [dishesInfo, setDishesInfo] = useState<Dish[]>([]);

    useEffect(() => {
        if (JSON.stringify(dishesInfo) !== JSON.stringify(favorites)) {
            setDishesInfo(favorites);
        }
    },[favorites]);

    const handleUpdate = () => {
        setDishesInfo([...favorites]);
    }

    return (
        (!dishesInfo || dishesInfo.length === 0) ? (
            <NoInfo/>
        ) : (
            <div className="card-grid">
                {dishesInfo.map((dish: Dish) => (
                    <DishCard key={dish.id} dish={dish} onUpdate={handleUpdate}/>
                ))}
            </div>
        )
    )
};

export {FavoriteRecipesPage};

