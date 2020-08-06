import { useRouter } from "next/router";
import React from "react";

import DefaultLayout from "../../../layouts/default";

const ShelvePage = () => {
    const router = useRouter();
    const id = parseInt(router.query.id);
    return <DefaultLayout>{id}</DefaultLayout>;
};

export default ShelvePage;
