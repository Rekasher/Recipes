import './NavigationBar.css';
import {RoutePath} from "../../routes/enum/routesEnum.ts";
import {useNavigate} from "react-router-dom";

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
                    Recipe
                </div>
                <div
                    className="navbar-logo"
                    onClick={()=> handleNavigate(RoutePath.LIST)}
                    style={{cursor: "pointer"}}
                >
                    LIST
                </div>
            </div>
        </header>
    );
};

export {NavigationBar };
