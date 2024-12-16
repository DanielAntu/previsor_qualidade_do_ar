import "./Input.css";

const Input = ({ placeholder = "", label, name, set, value }) => {
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}:</label>
            <input
                type="text"
                placeholder={placeholder}
                id={name}
                name={name}
                onChange={(e) => set(e.target.value)}
                value={value || ""}
            />
        </div>
    );
};

export default Input;
