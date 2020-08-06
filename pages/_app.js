import "../assets/style.sass";

import React from "react";

import BooksProvider from "../contexts/books";
import CategoriesProvider from "../contexts/categories";

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
    return (
        <BooksProvider>
            <CategoriesProvider>
                <Component {...pageProps} />
            </CategoriesProvider>
        </BooksProvider>
    );
}
