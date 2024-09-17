import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Card from "../components/Card";
import InputField from "../components/InputField";

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <InputField />,
        }
    ]
}]);

export default router;