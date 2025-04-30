import { createContext } from "react";

export interface RecipeContextType {
    recipeContext: string | null;
    setRecipeContext: (dish: string | null) => void;
}

const RecipeContext = createContext<RecipeContextType>({
    recipeContext: null,
    setRecipeContext: () => {},
});

export {RecipeContext};


