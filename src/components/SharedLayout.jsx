import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./SharedLayout.module.css"

export const SharedLayout = () => {
    return (
        <div>
            <div>
                <nav className={styles.navBord}>
                    <Link className={styles.navLink} to="/">
                        <span className={styles.navText}>Home</span>
                    </Link>
                    <Link className={styles.navLink} to="movies">
                        <span className={styles.navText}>Movies</span>
                    </Link>
                </nav>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
};