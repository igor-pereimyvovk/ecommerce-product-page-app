import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { theme } from "./theme/theme";
import { store } from "./store/store";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import { product } from "./data/product";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="main-container">
                    <Navbar />
                    <ProductPage product={product} />
                </Container>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
