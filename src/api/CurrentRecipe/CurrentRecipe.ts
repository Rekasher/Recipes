import { api } from '../api.ts';
import { API_KEY } from '../../utils/constants.ts';

const getRecipeInfo = async (id: string) => {
  try {
    const dataLink = `recipes/${id}?key=${API_KEY}`;
    return await api.get(dataLink).then((res) => res.data);
  } catch (err) {
    console.error(`Bad request: ${err}`);
  }
};

export { getRecipeInfo };
