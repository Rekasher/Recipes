import {SearchInput} from "./SearchInput/SearchInput.tsx";
import {MagGlass} from "../MagGlass/MagGlass.tsx";
import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useDish} from "../../context/Dish/DishProvider.tsx";
import {RoutePath} from "../../routes/enum/routesEnum.ts";
import './Search.css'
import {SearchStyle} from "./SearchEnum/SearchEnum.ts";


const Search = () => {

    const [dishes, setDishes] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const isNotSearchPage = location.pathname === RoutePath.SEARCH;
    const searchClassStyle = isNotSearchPage ? SearchStyle.SEARCH : SearchStyle.NAVIGATION;
    const {dish ,setDish} = useDish();

    const handleFindDish = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (dishes && dishes.trim() !== '') {
            setDish(dishes.trim());
            navigate(`${RoutePath.LIST}?value=${encodeURIComponent(dishes)}`);
        }
    }

    useEffect(() => {
        if (dish){
            setDishes(dish);
        }
    }, [dish]);

    return (
        <div className={searchClassStyle}>
            <form onSubmit={handleFindDish}>
                <SearchInput dishes={dishes} inputDish={setDishes}/>
                {isNotSearchPage && (<MagGlass callback={handleFindDish}/>)}
            </form>
        </div>
    );
};

export {Search};