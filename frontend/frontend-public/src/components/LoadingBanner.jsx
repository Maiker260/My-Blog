export default function LoadingBanner({ show, message = "" }) {
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="flex items-center gap-3 bg-black/90 text-white py-3 px-5 rounded-lg shadow-lg">
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span className="text-sm sm:text-base">{message}</span>
            </div>
        </div>
    );
}
