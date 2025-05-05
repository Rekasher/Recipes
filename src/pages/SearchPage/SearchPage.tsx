import "./SearchPage.css"
import {PageLayout} from "../PageLayot.tsx";
import {Search} from "../../components/Search/Search.tsx";

const SearchPage = () => {


    return (
        <PageLayout>
            <Search/>
        </PageLayout>
    );
};

export {SearchPage};