import './RecipesListPage.css'
import {NavigationBar} from "../../components/NavigationBar/NavigationBar.tsx";
import {Dish} from "../../types/dishType.ts";
import {DishCard} from "./Cards/DishCard.tsx";
import {useGetAllRecipes} from "../../services/getAllRecipes/getAllRecipes.ts";
import {useContext} from "react";
import {DishContext} from "../../components/Context/DishContext/DishContext.tsx";


const RecipesListPage = () => {

    const {dish} = useContext(DishContext);

    const dishesInfo = useGetAllRecipes(dish!);

    return (
        <>
            <NavigationBar/>
            <div className="card-grid">
                {dishesInfo.map((dish: Dish) => {
                    return (
                        <DishCard dish={dish}/>
                    )
                })}
            </div>

        </>
    );
};

export {RecipesListPage};