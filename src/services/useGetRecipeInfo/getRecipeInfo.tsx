import {
    useEffect,
    useState
} from "react";
import {getRecipeInfo} from "../../api/CurrentRecipe/CurrentRecipe.ts";
import {Recipe} from "../../types/recipeType.ts";

const useGetRecipe = (id: string) => {
    const [recipeData, setRecipeData] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getRecipeInfo(id)
            .then((info) => {
                setRecipeData(info!.data!.recipe);
            })
            .catch((err) => {
                setError(err.message || "Failed request");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {recipeData, loading, error};
}

export {useGetRecipe};