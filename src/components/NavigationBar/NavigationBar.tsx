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
    const isSearchPage = location.pathname === RoutePath.SEARCH;

    return (
        <header className="navbar-component">
            <div className="navbar">
                <div
                    className="navbar-logo"
                    onClick={() => navigate(RoutePath.SEARCH)}
                >
                    <MagGlass callback={null}/>
                </div>
                {!isSearchPage && (<Search/>)}

                <div className="options">
                    <Home/>
                    <FavoriteHeart/>
                </div>
            </div>
        </header>
    );
};

export {NavigationBar};
