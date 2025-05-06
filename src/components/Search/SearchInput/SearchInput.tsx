import React from "react";
import "./SearchInput.css"

type PropSearchInput = {
    dishes: string | null;
    inputDish: (dish: string) => void;
}

const SearchInput: React.FC<PropSearchInput> = ({dishes, inputDish}) => {

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        inputDish(e.target.value);
    }

    return (
        <div className="search-input-wrapper">
            <input
                className='search-input-text'
                onChange={handleChangeInput}
                value={dishes || ''}
                placeholder={'Search dish...'}
                type='search'
            >
            </input>
        </div>
    );
};

export {SearchInput};