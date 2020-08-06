import { useRouter } from "next/router";
import React from "react";

import DefaultLayout from "../../../layouts/default";

const ShelvePage = () => {
    const router = useRouter();
    const name = router.query.name;
    return <DefaultLayout>{name}</DefaultLayout>;
};

export default ShelvePage;
