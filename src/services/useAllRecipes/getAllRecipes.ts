import {useEffect, useState} from "react";
import {getAllRecipes} from "../../api/AllRecipes/AllRecipes.ts";
import {useDish} from "../../context/Dish/DishProvider.tsx";

const useGetAllRecipes = () => {
    const {dish} = useDish();
    const [dishesData, setDishesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        if (!dish) return;

        setLoading(true);
        setError(null);

        getAllRecipes(dish)
            .then((info) => {
                setDishesData(info!.data!.recipes);
            })
            .catch((err) => {
                setError(err.message || "Failed request");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [dish]);

    return {data: dishesData, loading, error};
};


export {useGetAllRecipes};