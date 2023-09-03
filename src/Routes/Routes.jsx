import { createBrowserRouter } from "react-router-dom";
import { SuperHeroesPage } from "../Components/SuperHeroes";
import RQSuperHeroes from "../Components/RQSuperHeroes";
import Home from "../Components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/super-heroes",
        element: <SuperHeroesPage />,
    },
    {
        path: "/rq-super-heroes",
        element: <RQSuperHeroes />,
    },
]);

export default router;