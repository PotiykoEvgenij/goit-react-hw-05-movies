import { useSearchParams } from "react-router-dom";
import { SearchBox } from "components/SearchBox";

const Movies = () => {
    return (
        <main>
            <SearchBox />
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </main>
    );
};

export default Movies;