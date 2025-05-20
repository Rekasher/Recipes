import { Search } from '../../components/Search/Search.tsx';
import { SearchStyle } from '../../components/Search/SearchEnum/SearchEnum.ts';
import './SearchPage.css';

const SearchPage = () => <Search searchVariant={SearchStyle.SEARCH_PAGE} />;

export { SearchPage };
