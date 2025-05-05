import {DishCard} from "../../components/Cards/DishCard.tsx";
import {useGetAllRecipes} from "../../services/useAllRecipes/getAllRecipes.ts";
import {Dish} from "../../types/dishType.ts";
import './RecipesListPage.css';
import {PageLayout} from "../PageLayot.tsx";
import {useEffect, useState} from "react";

const RecipesListPage = () => {

    const {data, loading, error} = useGetAllRecipes();
    const [dishesInfo, setDishesInfo] = useState<Dish[]>([]);

    useEffect(() => {
        if (data) {
            setDishesInfo(data);
        }
    }, [data]);

    const handleUpdate = () => {
        setDishesInfo([...dishesInfo]);
    }

    return (
        <PageLayout loading={loading} error={error!}>
            {
                (!dishesInfo || dishesInfo.length === 0) ? (
                    <div className="noDishes">No dishes found.</div>
                ) : (
                    <div className="card-grid">
                        {dishesInfo.map((dish: Dish) => (
                            <DishCard key={dish.id} dish={dish} onUpdate={handleUpdate}/>
                        ))}
                    </div>
                )
            }
        </PageLayout>);
};

export {RecipesListPage};