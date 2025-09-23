import { Link } from "react-router-dom";
import { LightBulb } from "../icons/LightBulb.jsx";

function SidebarBtn({ name, redirectTo, onClick, hasIcon = false, newTab }) {
    let icon = hasIcon ? <LightBulb /> : null;

    const classes =
        "w-full min-w-40 inline-flex justify-center items-center gap-1 text-base p-2 bg-emerald-700 rounded-sm hover:cursor-pointer hover:bg-emerald-600";

    if (redirectTo) {
        if (newTab) {
            return (
                <a
                    href={redirectTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes}
                >
                    <span>{name}</span>
                    {icon}
                </a>
            );
        }

        return (
            <Link to={redirectTo} className={classes}>
                <span>{name}</span>
                {icon}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            <span>{name}</span>
            {icon}
        </button>
    );
}

export default SidebarBtn;
