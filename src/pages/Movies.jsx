// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { MoviesList } from "components/MoviesList";
import { SearchBox } from "components/SearchBox";
// import { getTrending } from "components/Api";

const Movies = () => {
    // const movies = getTrending();
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