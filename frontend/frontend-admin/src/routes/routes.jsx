import MainLayout from "../layouts/MainLayout.jsx";
import BlogEditor from "../layouts/BlogEditor.jsx";
import BlogList from "../layouts/BlogList.jsx";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <BlogList /> },
            { path: "/new", element: <BlogEditor /> },
            { path: "/edit/:id", element: <BlogEditor /> },
        ],
    },
    // {ERROR WEPBAGE},
];

export default routes;
