import Head from "next/head";
import React from "react";

import Shelves from "../../containers/Shelves";
import DefaultLayout from "../../layouts/default";

const ShelvesPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Shelves</title>
            </Head>
            <DefaultLayout>
                <Shelves />
            </DefaultLayout>
        </React.Fragment>
    );
};

export default ShelvesPage;
