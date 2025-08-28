import { LightBulb } from "../icons/LightBulb.jsx";

function SidebarBtn({ name, hasIcon = false }) {
    let icon = hasIcon ? <LightBulb /> : null;

    return (
        <button className="flex items-center justify-center p-2 bg-emerald-700 rounded-sm hover:cursor-pointer hover:bg-emerald-600">
            <span>{name}</span>
            {icon}
        </button>
    );
}

export default SidebarBtn;
