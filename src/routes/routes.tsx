import {createBrowserRouter, Navigate} from "react-router-dom";
import {RoutePath} from "./enum/routesEnum.ts";
import {SearchPage} from "../pages/SearchPage/SearchPage.tsx";
import {RecipesListPage} from "../pages/RecipesListPage/RecipesListPage.tsx";
import {RecipePage} from "../pages/RecipePage/RecipePage.tsx";

const router = createBrowserRouter([

    {
        path: RoutePath.HOME,
        element: <Navigate to={RoutePath.SEARCH}/>,
    },
    {
        path: RoutePath.SEARCH,
        element: <SearchPage/>
    },
    {
        path: RoutePath.LIST,
        element: <RecipesListPage/>
    },
    {
        path: RoutePath.RECIPE,
        element: <RecipePage/>
    }

]);

export {router};
