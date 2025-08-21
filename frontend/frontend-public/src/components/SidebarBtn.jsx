import { LightBulb } from "../icons/LightBulb.jsx";

function SidebarBtn({ name }) {
    return (
        <button className="flex items-center p-2 hover:bg-gray-100">
            <span>{name}</span>
            <LightBulb />
        </button>
    );
}

export default SidebarBtn;
