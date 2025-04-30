import React, { useState } from "react";
import { RecipeContext } from "../CreateContext/RecipeContext.tsx";


interface Props {
    children: React.ReactNode;
}

const RecipeProvider: React.FC<Props> = ({ children }) => {
    const [recipeContext, setRecipeContext] = useState<string | null>(null);

    return (
        <RecipeContext.Provider value={{ recipeContext, setRecipeContext }}>
            {children}
        </RecipeContext.Provider>
    );
};

export {RecipeProvider};