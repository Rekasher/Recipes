import {SearchInput} from "./components/SearchInput/SearchInput.tsx";
import {MagGlass} from "../MagGlass/MagGlass.tsx";
import {FC, useState, FormEvent} from "react";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../routes/enum/routesEnum.ts";
import './Search.css'
import {SearchStyle} from "./SearchEnum/SearchEnum.ts";

type PropSearch = {
    searchVariant: string
}

const Search: FC<PropSearch> = ({searchVariant}) => {

    const [dishes, setDishes] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleFindDish = (e?: FormEvent) => {
        if (e) e.preventDefault();
        if (dishes && dishes.trim() !== '') {
            navigate(`${RoutePath.LIST}?value=${dishes}`);
        }
    }

    return (
        <div className={searchVariant}>
            <form onSubmit={handleFindDish}>
                <SearchInput dishes={dishes} inputDish={setDishes}/>
                {SearchStyle.SEARCH_PAGE === searchVariant && (<MagGlass callback={handleFindDish}/>)}
            </form>
        </div>
    );
};

export {Search};