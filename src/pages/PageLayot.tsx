import {FC, ReactNode} from "react";
import {NavigationBar} from "../components/NavigationBar/NavigationBar.tsx";
import {Spinner} from "../components/Spinner/Spinner.tsx";


type PropPageLayout  = {
    loading?: boolean;
    error?: string;
    children: ReactNode;
}

const PageLayout: FC<PropPageLayout> = ({loading, error, children}) => {
    return (
        <>
            <NavigationBar/>
            {loading ? (
                <div className="loading"><Spinner/></div>
            ) : error ? (
                <div className="noDishes">No recipe data found.</div>
            ) : (
                children
            )}
        </>
    );
}

export {PageLayout}