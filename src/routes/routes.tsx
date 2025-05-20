import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Layout } from '../components/Layot/Layot.tsx';
import { FavoriteProvider } from '../context/Favorite/FavoriteContext.tsx';
import { FavoriteRecipesPage } from '../pages/FavoriteRecipesPage/FavoriteRecipesPage.tsx';
import { RecipePage } from '../pages/RecipePage/RecipePage.tsx';
import { RecipesListPage } from '../pages/RecipesListPage/RecipesListPage.tsx';
import { SearchPage } from '../pages/SearchPage/SearchPage.tsx';
import { RoutePath } from './enum/routesEnum.ts';

const router = createBrowserRouter([
  {
    path: RoutePath.HOME,
    element: (
      <FavoriteProvider>
        <Layout />
      </FavoriteProvider>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={RoutePath.SEARCH} />,
      },
      {
        path: RoutePath.SEARCH,
        element: <SearchPage />,
      },
      {
        path: RoutePath.LIST,
        element: <RecipesListPage />,
      },
      {
        path: RoutePath.RECIPE,
        element: <RecipePage />,
      },
      {
        path: RoutePath.FAVORITE,
        element: <FavoriteRecipesPage />,
      },
    ],
  },
]);

export { router };
