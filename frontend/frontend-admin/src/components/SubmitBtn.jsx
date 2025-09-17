function SubmitBtn({ message, onClick }) {
    return (
        <button
            className="px-6 py-2 bg-emerald-700 hover:bg-emerald-600 hover:cursor-pointer text-white font-semibold rounded transition"
            onClick={onClick}
        >
            {message}
        </button>
    );
}

export default SubmitBtn;
