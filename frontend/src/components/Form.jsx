import React from "react";
import Input from "./Input";

import "./Form.css";

const Form = ({
    handleSubmit,
    setTemperature,
    temperature,
    setHumidity,
    humidity,
    setPm2,
    pm2,
    setPm1,
    pm1,
    setNo,
    no,
    setSo,
    so,
    setCo,
    co,
    setPia,
    pia,
    setPopulationDensity,
    populationDensity,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Input
                placeholder="exemplo: 34.5"
                label="Temperatura"
                name="temperature"
                set={setTemperature}
                value={temperature}
            />
            <Input
                placeholder="exemplo: 34.5"
                label="Umidade"
                name="humidity"
                set={setHumidity}
                value={humidity}
            />
            <Input
                placeholder="exemplo: 6.1"
                label="PM2.5"
                name="pm2"
                set={setPm2}
                value={pm2}
            />
            <Input
                placeholder="exemplo: 5.1"
                label="PM10"
                name="pm1"
                set={setPm1}
                value={pm1}
            />
            <Input
                placeholder="exemplo: 13.5"
                label="NO2"
                name="no"
                set={setNo}
                value={no}
            />
            <Input
                placeholder="exemplo: 5.3"
                label="SO2"
                name="so"
                set={setSo}
                value={so}
            />
            <Input
                placeholder="exemplo: 1.15"
                label="CO"
                name="co"
                set={setCo}
                value={co}
            />
            <Input
                placeholder="exemplo: 11.4"
                label="Proximidade com industrias (km)"
                name="pia"
                set={setPia}
                value={pia}
            />
            <Input
                placeholder="exemplo: 500"
                label="Densidade da população"
                name="population-density"
                set={setPopulationDensity}
                value={populationDensity}
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;
