import {SearchInput} from "./components/SearchInput/SearchInput.tsx";
import {useContext, useState} from "react";
import "./SearchPage.css"
import {NavigationBar} from "../../components/NavigationBar/NavigationBar.tsx";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../routes/enum/routesEnum.ts";
import {DishNameContext} from "../../components/Context/Dish/CreateContext/DishNameContext.tsx";
import {MagGlass} from "../../components/MagGlass/MagGlass.tsx";

const SearchPage = () => {
    const {setDishContext} = useContext(DishNameContext);
    const [dish, setDish] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleFindDish = () => {
        if (dish){
            setDishContext(dish);
            navigate(RoutePath.LIST);
            setDish(null);
        }
    }

    return (
        <>
            <NavigationBar/>
            <div className='wrapper'>
                <SearchInput dish={dish} inputDish={setDish}/>
                <MagGlass callback={handleFindDish}/>
            </div>
        </>
    );
};

export {SearchPage};