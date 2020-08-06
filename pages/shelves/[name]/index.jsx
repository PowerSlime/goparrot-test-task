import { useRouter } from "next/router";
import React from "react";

import Shelf from "../../../containers/Shelf";
import DefaultLayout from "../../../layouts/default";

const ShelfPage = () => {
    const router = useRouter();
    const name = router.query.name;
    return (
        <DefaultLayout>
            <Shelf name={name} />
        </DefaultLayout>
    );
};

export default ShelfPage;
