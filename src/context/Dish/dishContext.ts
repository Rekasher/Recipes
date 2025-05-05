import React from "react";

type DishContextType = {
    dish: string;
    setDish: (value: string) => void;
};

const DishContext = React.createContext<DishContextType | undefined>(undefined);


export type {DishContextType};
export {DishContext};
