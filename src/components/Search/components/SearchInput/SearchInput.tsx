import {ChangeEvent, FC} from "react";
import "./SearchInput.css"

type PropSearchInput = {
    dishes: string | null;
    inputDish: (dish: string) => void;
}

const SearchInput: FC<PropSearchInput> = ({dishes, inputDish}) => {

    return (
        <div className="search-input-wrapper">
            <input
                autoFocus={true}
                className='search-input-text'
                onChange={(e: ChangeEvent<HTMLInputElement>) => inputDish(e.target.value)}
                value={dishes || ''}
                placeholder={'Search dish...'}
                type='search'
            >
            </input>
        </div>
    );
};

export {SearchInput};