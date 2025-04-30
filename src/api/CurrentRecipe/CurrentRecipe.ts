// search by id from allRecipes

const getRecipeInfo = async (id: string) => {

    const apiKey = import.meta.env.VITE_API_KEY;
    const dataLink = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${apiKey}`;

    return await fetch(dataLink)
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

export { getRecipeInfo }