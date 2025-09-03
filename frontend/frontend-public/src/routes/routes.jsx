import MainLayout from "../layouts/MainLayout.jsx";
import BlogContainer from "../layouts/BlogContainer.jsx";
import PostsContainer from "../components/blog/PostsContainer.jsx";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <PostsContainer /> },
            { path: "/test", element: <BlogContainer /> },
        ],
    },
    // {ERROR WEPBAGE},
];

export default routes;
