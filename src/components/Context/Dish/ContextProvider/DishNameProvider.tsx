import React, { useState } from "react";
import { DishNameContext } from "../CreateContext/DishNameContext.tsx";


interface Props {
    children: React.ReactNode;
}

const DishNameProvider: React.FC<Props> = ({ children }) => {
    const [dishContext, setDishContext] = useState<string | null>(null);

    return (
        <DishNameContext.Provider value={{ dishContext, setDishContext }}>
            {children}
        </DishNameContext.Provider>
    );
};

export {DishNameProvider};