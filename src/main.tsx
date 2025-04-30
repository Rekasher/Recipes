import { StrictMode } from 'react'
import "./main.css"
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/routes.tsx";
import {DishNameProvider} from "./components/Context/Dish/ContextProvider/DishNameProvider.tsx";
import {RecipeProvider} from "./components/Context/Recipe/ContextProvider/RecipeProvider.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <DishNameProvider>
          <RecipeProvider>
              <RouterProvider router={router}/>
          </RecipeProvider>
      </DishNameProvider>
  </StrictMode>,
)
