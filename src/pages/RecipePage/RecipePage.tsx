import './RecipePage.css';
import { FavorButton } from '../../components/FavorButton/FavorButton.tsx';
import NoInfo from '../../components/NoInfo/NoInfo.tsx';
import { Spinner } from '../../components/Spinner/Spinner.tsx';
import { useRecipeProvider } from '../../context/Recipe/RecipeContext.tsx';
import { Ingredient } from '../../types/recipeType.ts';

const RecipePage = () => {
  const { recipe: recipeData, isLoading, error } = useRecipeProvider();

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
            <FavorButton />
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
