import { FaArrowLeft } from "react-icons/fa6";

import "./Result.css";

const Result = ({ result, handleClick }) => {
    return (
        <div className="result" onClick={handleClick}>
            <button>
                <FaArrowLeft />
            </button>
            <h2>Qualidade do Ar:</h2>
            <h3 style={{ color: result.color }}>{result.quality}</h3>
        </div>
    );
};

export default Result;
