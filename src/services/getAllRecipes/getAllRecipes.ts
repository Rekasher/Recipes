import {useEffect, useState} from "react";
import {getAllRecipes} from "../../api/AllRecipes/AllRecipes.ts";

const useGetAllRecipes = (dish: string) => {
    const [recipes, setRecipes] = useState([]);
    useEffect( ()=> {
        getAllRecipes(dish).then((info)=> {
            setRecipes(info!.data!.recipes);
        });
    },[]);




    return recipes;
}

export { useGetAllRecipes };