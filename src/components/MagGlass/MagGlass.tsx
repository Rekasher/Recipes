import React from "react";
import "./MagGlass.css"

type PropMagGlass = {
    callback: (() => void) | null;
}

const MagGlass: React.FC<PropMagGlass> = ({callback}) => {
    return (
        <div className='magGlass'
             style={{cursor: 'pointer'}}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5vw"
                height="5vh"
                fill="currentColor"
                viewBox="0 0 24 24"
                onClick={callback!}
            >
                <path d="M21 20l-5.7-5.7a7 7 0 1 0-1.4 1.4L20 21zM10 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
            </svg>
        </div>
    );
};

export {MagGlass};