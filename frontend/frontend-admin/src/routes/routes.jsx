import MainLayout from "../layouts/MainLayout.jsx";
import BlogEditor from "../layouts/BlogEditor.jsx";
import BlogList from "../layouts/BlogList.jsx";
import BlogPreview from "../layouts/BlogPreview.jsx";
import TagEditor from "../layouts/TagEditor.jsx";
import NotFound from "../pages/NotFound.jsx";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <BlogList /> },
            { path: "/post/new", element: <BlogEditor /> },
            { path: "/posts/edit/:id", element: <BlogEditor /> },
            { path: "/posts/preview/:id", element: <BlogPreview /> },
            { path: "/tag/edit", element: <TagEditor /> },
            { path: "*", element: <NotFound /> },
        ],
    },
];

export default routes;
