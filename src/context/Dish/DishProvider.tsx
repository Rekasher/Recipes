import {ReactNode, useContext, useState} from "react";
import {DishContext, DishContextType} from "./dishContext";

const DishProvider = ({children}: { children: ReactNode }) => {
    const [dish, setDish] = useState<string>("");

    return (
        <DishContext.Provider value={{dish, setDish}}>
            {children}
        </DishContext.Provider>
    );
};

const useDish = (): DishContextType => {
    const dish = useContext(DishContext);
    if (!dish) {
        throw new Error("useDish must be used within a DishProvider");
    }
    return dish;
}

export {DishProvider, useDish};