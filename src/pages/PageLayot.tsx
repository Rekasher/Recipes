import React from "react";
import {NavigationBar} from "../components/NavigationBar/NavigationBar.tsx";
import {Spinner} from "../components/Spinner/Spinner.tsx";


type PropPageLayout  = {
    loading?: boolean;
    error?: string;
    children: React.ReactNode;
}

const PageLayout = ({loading, error, children}: PropPageLayout ) => {
    return (
        <>
            <NavigationBar/>
            {loading ? (
                <div className="loading"><Spinner/></div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : (
                children
            )}
        </>
    );
}

export {PageLayout}