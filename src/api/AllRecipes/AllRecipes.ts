const getAllRecipes = async (dish: string) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const dataLink = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${dish}&key=${apiKey}`;

    return await fetch(dataLink)
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
}

export { getAllRecipes }