import './NavigationBar.css';
import {RoutePath} from "../../routes/enum/routesEnum.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {Home} from "../Home/Home.tsx";
import {FavoriteHeart} from "../FavoriteHeart/FavoriteHeart.tsx";
import {MagGlass} from "../MagGlass/MagGlass.tsx";
import {Search} from '../Search/Search.tsx';

const NavigationBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const isNotSearchPage = location.pathname !== RoutePath.SEARCH;


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
                {isNotSearchPage && (<Search/>)}

                <div className="options">
                    <Home/>
                    <FavoriteHeart/>
                </div>
            </div>
        </header>
    );
};

export {NavigationBar};
