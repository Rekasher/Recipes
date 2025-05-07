import {RoutePath} from "../../routes/enum/routesEnum.ts";
import {useNavigate} from "react-router-dom";
import "./Home.css"
import {IconHome} from "../../Icons/Icons";
import {useDish} from "../../context/Dish/DishProvider";
import {useMemo} from "react";

const Home = () => {

    const navigate = useNavigate();
    const {dish} = useDish();

    const navigationLink = useMemo(()=>{
        return `${RoutePath.LIST}?value=${dish}`
    },[dish])

    return (
        <div
            className="home"
            onClick={() => navigate(navigationLink)}
        >
            <IconHome color="black"/>
        </div>
    );
};

export {Home};