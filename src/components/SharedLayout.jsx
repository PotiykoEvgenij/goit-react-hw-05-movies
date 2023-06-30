import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <div>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="movies">Movies</Link>
                </nav>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
};