import { api } from '../api.ts';
import { API_KEY } from '../../utils/constants.ts';

const getAllRecipes = async (dish: string) => {
  try {
    const dataLink = `recipes?search=${dish}&key=${API_KEY}`;
    const response = await api.get(dataLink);
    return response.data.data.recipes;
  } catch (err) {
    throw new Error(`Bad request: ${err}`);
  }
};

export { getAllRecipes };
