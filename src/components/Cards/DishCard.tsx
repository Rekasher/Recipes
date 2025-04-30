import './DishCard.css'
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../routes/enum/routesEnum.ts";
import {Dish} from "../../types/dishType.ts";
import {RecipeContext} from "../Context/Recipe/CreateContext/RecipeContext.tsx";

type PropDishCard = {
    dish: Dish
}

const DishCard: React.FC<PropDishCard> = ({dish}) => {
    const {image_url, title, publisher, id} = dish;
    const navigate = useNavigate();
    const {setRecipeContext} = useContext(RecipeContext);

    const handleNavigate = () =>{
        setRecipeContext(id)
        navigate(RoutePath.RECIPE);
    }

    return (
        <>
            <div className="card" onClick={handleNavigate}>
                <div className="image-wrapper">
                    <img
                        src={image_url} alt="Image"
                        className="card-image"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">
                        {publisher}
                    </p>
                </div>
            </div>
        </>
    );
};

export {DishCard};