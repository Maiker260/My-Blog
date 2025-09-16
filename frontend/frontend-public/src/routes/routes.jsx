import MainLayout from "../layouts/MainLayout.jsx";
import BlogContainer from "../layouts/BlogContainer.jsx";
import PostsList from "../layouts/PostsList.jsx";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <PostsList /> },
            { path: "/posts/:id", element: <BlogContainer /> },
        ],
    },
    // {ERROR WEPBAGE},
];

export default routes;
