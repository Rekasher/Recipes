import {DishCard} from "../../components/Cards/DishCard.tsx";
import {Dish} from "../../types/dishType.ts";
import './RecipesListPage.css';
import {useEffect, useState} from "react";
import {useDishesProvider} from "../../context/Dish/DishContext.tsx";
import NoInfo from "../../components/NoInfo/NoInfo.tsx";
import {Spinner} from "../../components/Spinner/Spinner.tsx";

const RecipesListPage = () => {
    const [dishesInfo, setDishesInfo] = useState<Dish[]>([]);

    const {data, isLoading, error} = useDishesProvider();/*loading={loading} error={error!}*/

    useEffect(() => {
        if (data) {
            setDishesInfo(data);
        }
    }, [data]);

    const handleUpdate = () => {
        setDishesInfo([...dishesInfo]);
    }

    if (isLoading) {
        console.log('1121123');
        return <Spinner/>
    };
    if (error) throw error;
    if (!dishesInfo || dishesInfo.length === 0) return <NoInfo/>;

    return (
        <div className="card-grid">
            {dishesInfo.map((dish: Dish) => (
                <DishCard key={dish.id} dish={dish} onUpdate={handleUpdate}/>
            ))}
        </div>
    );
};

export {RecipesListPage};