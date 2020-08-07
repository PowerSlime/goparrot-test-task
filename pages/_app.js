import "../assets/style.sass";

import React from "react";
import { Provider } from "react-redux";

import BooksProvider from "../contexts/books";
import CategoriesProvider from "../contexts/categories";
import ThemeProvider from "../contexts/theme";
import store from "../redux/store";

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <BooksProvider>
                    <CategoriesProvider>
                        <Component {...pageProps} />
                    </CategoriesProvider>
                </BooksProvider>
            </ThemeProvider>
        </Provider>
    );
}
