import React, { useState } from "react";
import { DishContext } from "../CreateContext/DishContext";


interface Props {
    children: React.ReactNode;
}

const DishProvider: React.FC<Props> = ({ children }) => {
    const [dishContext, setDishContext] = useState<string | null>(null);

    return (
        <DishContext.Provider value={{ dishContext, setDishContext }}>
            {children}
        </DishContext.Provider>
    );
};

export {DishProvider};