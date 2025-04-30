import './RecipesListPage.css'
import {NavigationBar} from "../../components/NavigationBar/NavigationBar.tsx";
import {Dish} from "../../types/dishType.ts";
import {DishCard} from "../../components/Cards/DishCard.tsx";
import {useGetAllRecipes} from "../../services/getAllRecipes/getAllRecipes.ts";
import {useContext} from "react";
import {DishNameContext} from "../../components/Context/Dish/CreateContext/DishNameContext.tsx";


const RecipesListPage = () => {
    const { dishContext } = useContext(DishNameContext);
    const { data: dishesInfo, loading, error } = useGetAllRecipes(dishContext!);

    if (loading) {
        return (
            <>
                <NavigationBar />
                <div className="loading">Loading...</div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <NavigationBar />
                <div className="error">{error}</div>
            </>
        );
    }

    if (!dishesInfo || dishesInfo.length === 0) {
        return (
            <>
                <NavigationBar />
                <div className="noDishes">No dishes found.</div>
            </>
        );
    }

    return (
        <>
            <NavigationBar />
            <div className="card-grid">
                {dishesInfo.map((dish: Dish) => (
                    <DishCard key={dish.id} dish={dish} />
                ))}
            </div>
        </>
    );
};

export {RecipesListPage};