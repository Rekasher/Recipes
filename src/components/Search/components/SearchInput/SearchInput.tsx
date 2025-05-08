import { ChangeEvent, FC } from 'react';

import './SearchInput.css';

type PropSearchInput = {
  inputValue: string | null;
  onChangeDish: (dish: string) => void;
};

const SearchInput: FC<PropSearchInput> = ({ inputValue, onChangeDish }) => {
  return (
    <div className="search-input-wrapper">
      <input
        autoFocus={true}
        className="search-input-text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeDish(e.target.value)}
        value={inputValue || ''}
        placeholder={'Search dish...'}
        type="search"
      ></input>
    </div>
  );
};

export { SearchInput };
