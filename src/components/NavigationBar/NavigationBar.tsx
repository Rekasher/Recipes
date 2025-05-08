import './NavigationBar.css';
import {RoutePath} from "../../routes/enum/routesEnum.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {Home} from "../Home/Home.tsx";
import {FavoriteHeart} from "../FavoriteHeart/FavoriteHeart.tsx";
import {Search} from '../Search/Search.tsx';
import {SearchStyle} from "../Search/SearchEnum/SearchEnum.ts";

const NavigationBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const isListPage = location.pathname === RoutePath.LIST;

    return (
        <header className="navbar-component">
            <div className="navbar">
                <div
                    className="navbar-logo"
                    onClick={() => navigate(RoutePath.HOME)}
                >
                    <Home/>
                </div>
                {isListPage && (<Search searchVariant={SearchStyle.NOT_SEARCH_PAGE}/>)}

                <div className="options">
                    <FavoriteHeart/>
                </div>
            </div>
        </header>
    );
};

export {NavigationBar};
