import {RoutePath} from "../../routes/enum/routesEnum.ts";
import {useNavigate} from "react-router-dom";
import './Home.css'
import {IconHome} from "../../Icons/Icons.tsx";
import {useDish} from "../../context/Dish/DishProvider.tsx";

const Home = () => {

    const navigate = useNavigate();
    const {dish} = useDish();

    const handleNavigate = (path: string) => {
        navigate(`${path}?value=${dish}`);
    }

    return (
        <div className="home"
             onClick={() => handleNavigate(RoutePath.LIST)}
             style={{cursor: "pointer"}}
        >
            <IconHome color="black"/>
        </div>
    );
};

export {Home};