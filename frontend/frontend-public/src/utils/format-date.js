export default function formatDate(isoDate, includeTime = false) {
    const date = new Date(isoDate);

    const options = {
        weekday: "long", // Day of the week
        day: "2-digit", // 2-digit day
        month: "long", // Full month name
        year: "numeric", // Full year
    };

    // Add time options if includeTime is true
    if (includeTime) {
        options.hour = "numeric";
        options.minute = "2-digit";
        options.second = "2-digit";
        options.hour12 = true;
    }

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        date
    );

    return formattedDate;
}
