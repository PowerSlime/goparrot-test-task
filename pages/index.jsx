import React from "react";

import Books from "../containers/Books";
import DefaultLayout from "../layouts/default";

const IndexPage = () => {
    return (
        <DefaultLayout>
            <Books />
        </DefaultLayout>
    );
};

export default IndexPage;
