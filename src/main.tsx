import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/routes.tsx";
import {DishProvider} from "./context/Dish/DishProvider.tsx";
import "./main.css"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DishProvider>
            <RouterProvider router={router}/>
        </DishProvider>
    </StrictMode>,
)
