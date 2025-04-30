import "./RecipePage.css";
import {NavigationBar} from "../../components/NavigationBar/NavigationBar.tsx";
import {useContext} from "react";
import {RecipeContext} from "../../components/Context/Recipe/CreateContext/RecipeContext.tsx";
import {useGetRecipe} from "../../services/getRecipeInfo/getRecipeInfo.tsx";
import {Ingredient, Recipe} from "../../types/recipeType.ts";

const RecipePage = () => {
    const { recipeContext } = useContext(RecipeContext);
    const { recipeData, loading, error } = useGetRecipe(recipeContext!);


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

    if (!recipeData) {
        return (
            <>
                <NavigationBar />
                <div className="error">No recipe data found.</div>
            </>
        );
    }

    console.log(recipeData);

    const { cooking_time, image_url, ingredients, publisher, servings, source_url, title }: Recipe= recipeData;

    const handleToDetails = () => {
        window.location.href = source_url;
    }

    const handleToFavorite = () => {

    }

    return (
        <>
            <NavigationBar />
            <div className="main">
                <div className="preview">
                    <div className="image-wrapper">
                        <img
                            src={image_url} alt="Image"
                            className="card-image"
                        />
                    </div>
                    <div className="preview-info">
                        <div className="preview-text">
                            <div className="title">{title}</div>
                            <div className="publisher">{publisher}</div>
                        </div>
                        <div className="preview-service">
                            <div className="serving">{servings}</div>
                            <div className="cooking_time">{cooking_time}</div>
                        </div>
                        <div className="preview-buttons">
                            <button className="details" onClick={handleToDetails}>Details</button>
                            <button className="add-to-favorite" onClick={handleToFavorite}>Add to favorite</button>
                        </div>
                    </div>
                </div>
                <h2>Ingredients</h2>
                <div className="line"/>
                <ul>
                    {ingredients.map((ingredient: Ingredient, pos: number) => {
                        return <li key={pos}>{`${ingredient.quantity ? ingredient.quantity : ''}${ingredient.unit} ${ingredient.description}`}</li>;
                    })}
                </ul>

            </div>
        </>
    );
};

export {RecipePage};