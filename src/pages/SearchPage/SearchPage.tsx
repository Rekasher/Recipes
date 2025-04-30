import {SearchInput} from "./components/SearchInput/SearchInput.tsx";
import {useContext} from "react";
import "./SearchPage.css"
import {NavigationBar} from "../../components/NavigationBar/NavigationBar.tsx";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../routes/enum/routesEnum.ts";
import {DishContext} from "../../components/Context/DishContext/DishContext.tsx";

const SearchPage = () => {
    const {dish, setDish} = useContext(DishContext);
    const navigate = useNavigate();

    const handleFindDish = () => {
        navigate(RoutePath.LIST)

    }

    return (
        <>
            <NavigationBar/>
            <div className='wrapper'>
                <SearchInput dish={dish} inputDish={setDish}/>
                <div className='search-input-button'
                     style={{cursor: 'pointer'}}
                     onClick={handleFindDish}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5vw"
                        height="5vh"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21 20l-5.7-5.7a7 7 0 1 0-1.4 1.4L20 21zM10 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
                    </svg>
                </div>

            </div>
        </>
    );
};

export {SearchPage};