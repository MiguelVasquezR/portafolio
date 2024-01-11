import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashbord from '../View/Dashbord/Dashbord';
import Project from '../View/Project/Project';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashbord />
    },
    {
        path: "/project/:id",
        element: <Project />
    }
]);

const Routers = () => {

    return (
        <RouterProvider router={router} />
    );
}

export default Routers;