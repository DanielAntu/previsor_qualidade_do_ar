import React from "react";
import { FaRotateRight } from "react-icons/fa6";

import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <FaRotateRight />
            <h2>Por favor Aguarde...</h2>
        </div>
    );
};

export default Loading;
