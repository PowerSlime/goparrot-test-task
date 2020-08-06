import Head from "next/head";
import React from "react";

import Books from "../containers/Books";
import DefaultLayout from "../layouts/default";

const IndexPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Books</title>
            </Head>
            <DefaultLayout>
                <Books />
            </DefaultLayout>
        </React.Fragment>
    );
};

export default IndexPage;
