import SidebarBtn from "../components/SidebarBtn.jsx";
import { useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();
    const pathUrl = location.pathname;

    const isHome = pathUrl === "/";

    return (
        <article className="flex">
            <div className="flex flex-col gap-4 mt-20">
                {isHome ? null : (
                    <SidebarBtn name={"Back to Home"} redirectTo={"/"} />
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
