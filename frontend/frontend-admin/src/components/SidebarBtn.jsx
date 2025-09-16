import { Link, useNavigate } from "react-router-dom";
import { LightBulb } from "../icons/LightBulb.jsx";

function SidebarBtn({
    name = null,
    redirectTo,
    onClick,
    hasIcon = false,
    newTab,
    warnBeforeLeave = false,
}) {
    const navigate = useNavigate();
    let icon = hasIcon ? <LightBulb /> : null;

    const classes =
        "inline-flex justify-center items-center gap-1 text-base p-2 bg-emerald-700 rounded-sm hover:cursor-pointer hover:bg-emerald-600";

    const handleClick = (e) => {
        if (warnBeforeLeave) {
            const confirmed = window.confirm(
                "You have unsaved changes. Are you sure you want to leave?"
            );
            if (!confirmed) {
                e.preventDefault();
                return;
            }
        }

        if (onClick) onClick();
        if (redirectTo) navigate(redirectTo);
    };

    if (redirectTo) {
        if (newTab) {
            return (
                <a
                    href={redirectTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes}
                    onClick={warnBeforeLeave ? handleClick : undefined}
                >
                    <span>{name}</span>
                    {icon}
                </a>
            );
        }

        return (
            <Link
                to={redirectTo}
                className={classes}
                onClick={warnBeforeLeave ? handleClick : undefined}
            >
                <span>{name}</span>
                {icon}
            </Link>
        );
    }

    return (
        <button onClick={handleClick} className={classes}>
            <span>{name}</span>
            {icon}
        </button>
    );
}

export default SidebarBtn;
