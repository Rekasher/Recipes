import {FC} from "react";
import {NavigationBar} from "../NavigationBar/NavigationBar.tsx";
import {Outlet} from "react-router-dom";



const Layout: FC = () => {
    return (
        <>
            <NavigationBar/>
            <Outlet/>
        </>
    );
}

export {Layout}