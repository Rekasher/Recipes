import {Dish} from "../../types/dishType.ts";

const checkTheFavoriteDish = (dish: Dish, favorList: Dish[]): boolean => {
    return favorList.some(recipe => recipe.id === dish.id)
}

export {checkTheFavoriteDish};