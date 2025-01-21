import { ThemeProvider } from './ThemeContext'
import { CurrencyProvider } from './CurrencyContext'
import { SearchProvider } from './SearchContext'
import { CartProvider } from "react-use-cart";

const Context = ({ children }) => (
    <CartProvider>
        <CurrencyProvider>
        <SearchProvider>
            <ThemeProvider>
            {children}
            </ThemeProvider>
        </SearchProvider>
        </CurrencyProvider>
    </CartProvider>
);

export default Context;