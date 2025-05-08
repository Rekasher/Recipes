import { useEffect, useState } from 'react';
import './RecipePage.css';
import { useSearchParams } from 'react-router-dom';
import { FavorButton } from '../../components/FavorButton/FavorButton.tsx';
import NoInfo from '../../components/NoInfo/NoInfo.tsx';
import { Spinner } from '../../components/Spinner/Spinner.tsx';
import { useGetFavoriteFromTheLocal } from '../../hooks/useFavoriteDishes/useGetFavoriteFromTheLocal.ts';
import { useGetRecipe } from '../../hooks/useGetRecipeInfo/getRecipeInfo.tsx';
import { Ingredient } from '../../types/recipeType.ts';
import { checkTheFavoriteDish } from '../../utils/checkFavoriteDish/checkTheFavoriteDish.ts';

const RecipePage = () => {
  const [searchParams] = useSearchParams();
  const dishId = searchParams.get('id')!;

  const {
    data: recipeData,
    isLoading,
    error,
  } = useGetRecipe(dishId); /*loading={loading} error={error!}*/
  const favorList = useGetFavoriteFromTheLocal();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!recipeData) return;

    const fav = checkTheFavoriteDish(recipeData, favorList);
    setIsFavorite(fav);
  }, [recipeData, favorList]);

  const handleToUpdate = () => {
    setIsFavorite((prev) => !prev);
  };

  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (!recipeData) return <NoInfo />;

  return (
    <div className="main">
      <div className="preview">
        <div className="image-wrapper">
          <img src={recipeData.image_url} alt="Image" className="card-image" />
        </div>
        <div className="preview-info">
          <div className="preview-text">
            <div className="title">{recipeData.title}</div>
            <div className="publisher">{recipeData.publisher}</div>
          </div>
          <div className="preview-service">
            <div className="serving">Serving size: {recipeData.servings}</div>
            <div className="cooking_time">Cooking time: {recipeData.cooking_time}</div>
          </div>
          <div className="preview-buttons">
            <button
              className="details"
              onClick={() => (window.location.href = recipeData.source_url)}
            >
              Details
            </button>
            <FavorButton isFavor={isFavorite} dish={recipeData} onUpdate={handleToUpdate} />
          </div>
        </div>
      </div>
      <h2>Ingredients</h2>
      <div className="line" />
      <ul>
        {recipeData.ingredients!.map((ingredient: Ingredient, pos: number) => (
          <li key={pos}>
            {`${ingredient.quantity ?? ''} ${ingredient.unit} ${ingredient.description}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { RecipePage };
