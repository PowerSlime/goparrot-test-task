import React from "react";
import useSWR from "swr";

import { axiosFetcher } from "../../utils/axios";

export const BooksContext = React.createContext([]);

// eslint-disable-next-line
const BooksProvider = ({ children }) => {
    const { data } = useSWR(`/books.json`, axiosFetcher);

    return <BooksContext.Provider value={data || []}>{children}</BooksContext.Provider>;
};

export default BooksProvider;
