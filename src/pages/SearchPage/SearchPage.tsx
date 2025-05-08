import './SearchPage.css';
import { Search } from '../../components/Search/Search.tsx';
import { SearchStyle } from '../../components/Search/SearchEnum/SearchEnum.ts';

const SearchPage = () => <Search searchVariant={SearchStyle.SEARCH_PAGE} />;

export { SearchPage };
