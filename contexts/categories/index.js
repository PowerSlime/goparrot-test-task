import React from "react";
import useSWR from "swr";

import { axiosFetcher } from "../../utils/axios";

export const CategoriesContext = React.createContext([]);

// eslint-disable-next-line
const CategoriesProvider = ({ children }) => {
    const { data } = useSWR(`/books.json`, axiosFetcher);

    return <CategoriesContext.Provider value={data || []}>{children}</CategoriesContext.Provider>;
};

export default CategoriesProvider;
