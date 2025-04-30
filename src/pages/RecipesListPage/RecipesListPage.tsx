import './RecipesListPage.css'
import {NavigationBar} from "../../components/NavigationBar/NavigationBar.tsx";
import {Dish} from "../../types/dishType.ts";
import {DishCard} from "./Cards/DishCard.tsx";
import {useGetAllRecipes} from "../../services/getAllRecipes/getAllRecipes.ts";
import {useContext} from "react";
import {DishContext} from "../../components/Context/Dish/CreateContext/DishContext.tsx";


const RecipesListPage = () => {

    const {dishContext} = useContext(DishContext);

    if (!dishContext){
        return (
            <>
                <NavigationBar/>
                <div className="noDishes">
                    No dishes found.
                </div>
            </>
        );
    }

    const dishesInfo = useGetAllRecipes(dishContext!);

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