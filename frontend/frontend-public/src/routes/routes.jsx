import MainLayout from "../layouts/MainLayout.jsx";
import BlogContainer from "../layouts/BlogContainer.jsx";
import PostsList from "../layouts/PostsList.jsx";
import NotFound from "../pages/NotFound.jsx";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <PostsList /> },
            { path: "/posts/:id", element: <BlogContainer /> },
            { path: "*", element: <NotFound /> },
        ],
    },
];

export default routes;
