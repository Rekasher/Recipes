import {Dish} from "../../types/dishType.ts";
import {DishCard} from "../../components/Cards/DishCard.tsx";

import {PageLayout} from "../PageLayot.tsx";
import {useEffect, useState} from "react";
import "./FavoriteRecipesPage.css"
import {useGetFavoriteFromTheLocal} from "../../hooks/useFavoriteDishes/useGetFavoriteFromTheLocal.ts";

const FavoriteRecipesPage = () => {

    const [dishesInfo, setDishesInfo] = useState<Dish[]>([]);

    const loadFavoriteDishes = () => {
        const favorites = useGetFavoriteFromTheLocal();
        setDishesInfo(favorites);
    }

    useEffect(() => {
        loadFavoriteDishes();

        const onStorageChange = (e: StorageEvent) => {
            if (e.key === 'Favorite') {
                loadFavoriteDishes();
            }
        };

        window.addEventListener("storage", onStorageChange);

        return () => {
            window.removeEventListener("storage", onStorageChange);
        };

    }, []);


    return (
        <PageLayout>
            {
                (!dishesInfo || dishesInfo.length === 0) ? (
                    <div className="noDishes">No dishes found.</div>
                ) : (
                    <div className="card-grid">
                        {dishesInfo.map((dish: Dish) => (
                            <DishCard key={dish.id} dish={dish} onUpdate={loadFavoriteDishes}/>
                        ))}
                    </div>
                )
            }
        </PageLayout>
    )
};

export {FavoriteRecipesPage};

