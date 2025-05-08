export type Ingredient = {
  quantity: number;
  unit: string;
  description: string;
};

export type Recipe = {
  cooking_time: number;
  id: string;
  image_url: string;
  ingredients: Ingredient[];
  publisher: string;
  servings: number;
  source_url: string;
  title: string;
};
