import MainLayout from "../layouts/MainLayout.jsx";
import BlogEditor from "../layouts/BlogEditor.jsx";
import BlogList from "../layouts/BlogList.jsx";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <BlogList /> },
            { path: "/edit", element: <BlogEditor /> },
            // NEED TO ADD THE POST ID IN THE URL TO GET THE CORRECT POST
        ],
    },
    // {ERROR WEPBAGE},
];

export default routes;
