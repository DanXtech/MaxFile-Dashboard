import App from "../App";
import Event from "../page/event/Event";
import Home from "../page/home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/event",
                element: <Event />,
            },

        ],
    },
]);

export default router;
