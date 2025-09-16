import MainLayout from "../layouts/MainLayout.jsx";
import BlogEditor from "../layouts/BlogEditor.jsx";
import BlogList from "../layouts/BlogList.jsx";
import BlogPreview from "../layouts/BlogPreview.jsx";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <BlogList /> },
            { path: "/post/new", element: <BlogEditor /> },
            { path: "/post/edit/:id", element: <BlogEditor /> },
            { path: "/post/preview/:id", element: <BlogPreview /> },
        ],
    },
    // {ERROR WEPBAGE},
];

export default routes;
