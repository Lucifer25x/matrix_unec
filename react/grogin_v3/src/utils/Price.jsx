import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const Price = ({ price }) => {
    const [currency, rates] = useContext(CurrencyContext);

    return (
        <>
            {Math.round(price * rates[currency] * 100) / 100} {currency}
        </>
    );
}

export default Price;