import { api } from '../api.ts';
import { API_KEY } from '../../utils/constants.ts';

const getAllRecipes = async (dish: string) => {
  try {
    const dataLink = `recipes?search=${dish}&key=${API_KEY}`;
    return await api.get(dataLink).then((res) => res.data);
  } catch (err) {
    throw new Error(`Bad request: ${err}`);
  }
};

export { getAllRecipes };
