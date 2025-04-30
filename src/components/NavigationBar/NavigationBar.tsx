import './NavigationBar.css';
import {RoutePath} from "../../routes/enum/routesEnum.ts";
import {useNavigate} from "react-router-dom";
import {Home} from "../Home/Home.tsx";
import {Favorite} from "../Favorite/Favorite.tsx";
import {MagGlass} from "../MagGlass/MagGlass.tsx";

const NavigationBar = () => {

    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <header className="navbar-component">
            <div className="navbar">
                <div
                    className="navbar-logo"
                    onClick={() => handleNavigate(RoutePath.SEARCH)}
                >
                   <MagGlass callback={null}/>
                </div>
                <div className="options">
                    <Home/>
                    <Favorite/>
                </div>
            </div>
        </header>
    );
};

export {NavigationBar };
