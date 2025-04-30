import React, { useState } from "react";
import { DishContext } from '../DishContext/DishContext.tsx'

interface Props {
    children: React.ReactNode;
}

export const DishProvider: React.FC<Props> = ({ children }) => {
    const [dish, setDish] = useState<string | null>(null);

    return (
        <DishContext.Provider value={{ dish, setDish }}>
            {children}
        </DishContext.Provider>
    );
};