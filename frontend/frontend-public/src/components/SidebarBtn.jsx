import { LightBulb } from "../icons/LightBulb.jsx";

function SidebarBtn({ name, hasIcon = false }) {
    let icon = hasIcon ? <LightBulb /> : null;

    return (
        // NEED TO BE REPLACED WITH A "LINK TAG" AFTER SETTING UP THE REACT ROUTER
        <a className="flex items-center justify-center text-base p-2 bg-emerald-700 rounded-sm hover:cursor-pointer hover:bg-emerald-600">
            <span>{name}</span>
            {icon}
        </a>
    );
}

export default SidebarBtn;
