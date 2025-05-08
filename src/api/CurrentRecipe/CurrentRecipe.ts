import { api } from '../api.ts';

const getRecipeInfo = async (id: string) => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    const dataLink = `recipes/${id}?key=${apiKey}`;
    return await api.get(dataLink).then((res) => res.data);
  } catch (err) {
    console.error(`Bad request: ${err}`);
  }
};

export { getRecipeInfo };
