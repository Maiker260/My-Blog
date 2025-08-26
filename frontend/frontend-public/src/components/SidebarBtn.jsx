import { LightBulb } from "../icons/LightBulb.jsx";

function SidebarBtn({ name }) {
    return (
        <button className="flex items-center p-2 bg-emerald-700 rounded-sm hover:cursor-pointer hover:bg-emerald-500">
            <span>{name}</span>
            <LightBulb />
        </button>
    );
}

export default SidebarBtn;
