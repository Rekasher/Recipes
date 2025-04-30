import './DishCard.css'
import React from "react";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../../routes/enum/routesEnum.ts";
import {Dish} from "../../../types/dishType.ts";


type PropDishCard = {
    dish: Dish
}

const DishCard: React.FC<PropDishCard> = ({dish}) => {
    const {image_url, title, publisher} = dish;
    const navigate = useNavigate();


    const handleNavigate = () =>{
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