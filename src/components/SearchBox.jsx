export const SearchBox = ({ value, onChange }) => {
    return (
        <form>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <button>Search</button>
        </form>
    );
};