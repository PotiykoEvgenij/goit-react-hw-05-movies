import { Link, useLocation, useLovation } from "react-router-dom";

export const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <Link to={`movies.id`} state={{ from: location }}>
                        <img src="#" alt="" />
                        <h2>{movie.name}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};