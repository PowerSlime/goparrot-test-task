import { useRouter } from "next/router";
import React from "react";

import Shelve from "../../../containers/Shelve";
import DefaultLayout from "../../../layouts/default";

const ShelvePage = () => {
    const router = useRouter();
    const name = router.query.name;
    return (
        <DefaultLayout>
            <Shelve name={name} />
        </DefaultLayout>
    );
};

export default ShelvePage;
