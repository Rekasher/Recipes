import { FavorButton } from '../../components/FavorButton/FavorButton.tsx';
import NoInfo from '../../components/NoInfo/NoInfo.tsx';
import { Spinner } from '../../components/Spinner/Spinner.tsx';
import { Ingredient } from '../../types/recipeType.ts';
import './RecipePage.css';
import { useSearchParams } from 'react-router-dom';
import { useGetRecipe } from '../../hooks/useGetRecipeInfo/useGetRecipeInfo.ts';

const RecipePage = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading, error } = useGetRecipe(searchParams.get('id') || '');

  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (!data) return <NoInfo />;

  return (
    <div className="main">
      <div className="preview">
        <div className="image-wrapper">
          <img src={data.image_url} alt="Image" className="card-image" />
        </div>
        <div className="preview-info">
          <div className="preview-text">
            <div className="title">{data.title}</div>
            <div className="publisher">{data.publisher}</div>
          </div>
          <div className="preview-service">
            <div className="serving">Serving size: {data.servings}</div>
            <div className="cooking_time">Cooking time: {data.cooking_time}</div>
          </div>
          <div className="preview-buttons">
            <button className="details" onClick={() => (window.location.href = data.source_url)}>
              Details
            </button>
            <FavorButton />
          </div>
        </div>
      </div>
      <h2>Ingredients</h2>
      <div className="line" />
      <ul>
        {data.ingredients!.map((ingredient: Ingredient, pos: number) => (
          <li key={pos}>
            {`${ingredient.quantity ?? ''} ${ingredient.unit} ${ingredient.description}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { RecipePage };
