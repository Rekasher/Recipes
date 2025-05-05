import {useEffect, useState} from "react";
import "./RecipePage.css";
import {useLocation} from "react-router-dom";
import {useGetRecipe} from "../../services/useGetRecipeInfo/getRecipeInfo.tsx";
import {Ingredient} from "../../types/recipeType.ts";
import {
    checkTheFavoriteDishes,
    useGetFavoriteFromTheLocal,
} from "../../services/useFavoriteDishes/makeFavoriteDishes.ts";
import {AddButton} from "../../components/FavorButtons/AddButton/AddButton.tsx";
import {RemoveButton} from "../../components/FavorButtons/RemoveButton/RemoveButton.tsx";
import {PageLayout} from "../PageLayot.tsx";

const RecipePage = () => {
    const location = useLocation();
    const dishId = location.state?.id;

    const {recipeData, loading, error} = useGetRecipe(dishId);
    const favorList = useGetFavoriteFromTheLocal();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (!recipeData) return;

        const fav = checkTheFavoriteDishes(recipeData, favorList);
        setIsFavorite(fav);
    }, [recipeData, favorList]);

    const handleToUpdate = () => {
        setIsFavorite((prev) => !prev);
    };

    return (
        <PageLayout loading={loading} error={error!}>
            {!recipeData ? (
                <div className="error">No recipe data found.</div>
            ) : (
                <div className="main">
                    <div className="preview">
                        <div className="image-wrapper">
                            <img
                                src={recipeData.image_url}
                                alt="Image"
                                className="card-image"
                            />
                        </div>
                        <div className="preview-info">
                            <div className="preview-text">
                                <div className="title">{recipeData.title}</div>
                                <div className="publisher">{recipeData.publisher}</div>
                            </div>
                            <div className="preview-service">
                                <div className="serving">Serving size: {recipeData.servings}</div>
                                <div className="cooking_time">
                                    Cooking time: {recipeData.cooking_time}
                                </div>
                            </div>
                            <div className="preview-buttons">
                                <button
                                    className="details"
                                    onClick={() => (window.location.href = recipeData.source_url)}
                                >
                                    Details
                                </button>
                                {isFavorite ? (
                                    <RemoveButton
                                        dish={recipeData}
                                        onUpdate={handleToUpdate}
                                    />
                                ) : (
                                    <AddButton
                                        dish={recipeData}
                                        onUpdate={handleToUpdate}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <h2>Ingredients</h2>
                    <div className="line"/>
                    <ul>
                        {recipeData.ingredients!.map((ingredient: Ingredient, pos: number) => (
                            <li key={pos}>
                                {`${ingredient.quantity ?? ""} ${ingredient.unit} ${ingredient.description}`}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </PageLayout>
    );
};

export {RecipePage};
