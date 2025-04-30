import { createContext } from "react";

export interface DishContextType {
    dish: string | null;
    setDish: (dish: string | null) => void;
}

const DishContext = createContext<DishContextType>({
    dish: null,
    setDish: () => {},
});

export {DishContext};


