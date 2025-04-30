import { createContext } from "react";

export interface DishContextType {
    dishContext: string | null;
    setDishContext: (dish: string | null) => void;
}

const DishContext = createContext<DishContextType>({
    dishContext: null,
    setDishContext: () => {},
});

export {DishContext};


