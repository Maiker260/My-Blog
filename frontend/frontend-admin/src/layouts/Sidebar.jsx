import { useLocation } from "react-router-dom";
import SidebarBtn from "../components/SidebarBtn.jsx";

function Sidebar() {
    const location = useLocation();
    const pathUrl = location.pathname;

    return (
        <article className="flex flex-col gap-18">
            <h2>Welcome Back, User!</h2>
            <div className="flex flex-col gap-4">
                {pathUrl === "/" ? (
                    <SidebarBtn name="Write a new Post" redirectTo="/new" />
                ) : (
                    <SidebarBtn name="Back to Home" redirectTo="/" />
                )}
                <SidebarBtn
                    name={"My Code "}
                    redirectTo={"https://github.com/Maiker260/My-Blog"}
                    newTab
                />
                <SidebarBtn name={"About"} />
            </div>
        </article>
    );
}

export default Sidebar;
