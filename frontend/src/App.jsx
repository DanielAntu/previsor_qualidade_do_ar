import { useState } from "react";
import { ToastContainer } from "react-toastify";

import Form from "./components/Form";
import Loading from "./components/Loading";
import Result from "./components/Result";

import useToast from "./hook/useToast";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [temperature, setTemperature] = useState("");
    const [humidity, setHumidity] = useState("");
    const [pm2, setPm2] = useState("");
    const [pm1, setPm1] = useState("");
    const [no, setNo] = useState("");
    const [so, setSo] = useState("");
    const [co, setCo] = useState("");
    const [pia, setPia] = useState("");
    const [populationDensity, setPopulationDensity] = useState("");
    const [isResult, setIsResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState({});

    const url = "http://127.0.0.1:5000/api/";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const obj = {
            temperature,
            humidity,
            pm2,
            pm1,
            no,
            so,
            co,
            pia,
            population_density: populationDensity,
        };

        try {
            setLoading(true);
            const response = await fetch(`${url}quality`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj),
            });

            const data = await response.json();

            if (data.error) {
                setLoading(false);
                data.error.forEach((error) => {
                    useToast(error);
                });
                return;
            }

            setResult(data);
            setIsResult(true);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = () => {
        setIsResult(false);
        setTemperature("");
        setHumidity("");
        setNo("");
        setPia("");
        setPm1("");
        setPm2("");
        setPopulationDensity("");
        setSo("");
        setCo("");
    };

    return (
        <div className="app">
            <ToastContainer />
            <header>
                <h1>Qualidade do ar</h1>
            </header>
            <div className="container">
                <div className="container-display">
                    {!isResult && !loading && (
                        <Form
                            handleSubmit={handleSubmit}
                            setTemperature={setTemperature}
                            temperature={temperature}
                            setCo={setCo}
                            co={co}
                            setHumidity={setHumidity}
                            humidity={humidity}
                            setNo={setNo}
                            no={no}
                            setPia={setPia}
                            pia={pia}
                            setPm1={setPm1}
                            pm1={pm1}
                            setPm2={setPm2}
                            pm2={pm2}
                            setPopulationDensity={setPopulationDensity}
                            populationDensity={populationDensity}
                            setSo={setSo}
                            so={so}
                        />
                    )}
                    {loading && <Loading />}
                    {isResult && (
                        <Result result={result} handleClick={handleClick} />
                    )}
                </div>
            </div>
            <footer>
                <p>&copy; Daniel Antunes 2024</p>
            </footer>
        </div>
    );
}

export default App;
