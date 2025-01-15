import { createContext, useState, useEffect } from "react"
const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState("USD");
    const [rates, setRates] = useState({});

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setRates(data.rates)
            });
    }, []);

    return (
        <CurrencyContext.Provider value={[currency, rates, setCurrency]}>
            {children}
        </CurrencyContext.Provider>
    );
}