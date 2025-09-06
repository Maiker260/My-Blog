import MainLayout from "../layouts/MainLayout.jsx";
import BlogEditor from "../layouts/BlogEditor.jsx";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [{ path: "/", element: <BlogEditor /> }],
    },
    // {ERROR WEPBAGE},
];

export default routes;
