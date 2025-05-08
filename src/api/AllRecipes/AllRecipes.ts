import { api } from '../api.ts';

const getAllRecipes = async (dish: string) => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    const dataLink = `recipes?search=${dish}&key=${apiKey}`;
    return await api.get(dataLink).then((res) => res.data);
  } catch (err) {
    throw new Error(`Bad request: ${err}`);
  }
};

export { getAllRecipes };
