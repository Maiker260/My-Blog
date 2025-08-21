import SidebarBtn from "../components/SidebarBtn.jsx";

function Sidebar({ className }) {
    return (
        <article className={className}>
            <SidebarBtn name={"Suggest and Idea "} />
        </article>
    );
}

export default Sidebar;
