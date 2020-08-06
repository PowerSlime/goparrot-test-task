import { Button, Input, Table } from "antd";
import cn from "classnames";
import { useRouter } from "next/router";
import React, { useCallback, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { addShelve } from "../../redux/actions";
import { getShelvesStore } from "../../redux/selectors";
import styles from "./styles.module.sass";

const columns = [
    {
        title: "Name",
        dataIndex: "key",
    },
    {
        title: "Category",
        dataIndex: "category",
    },
];

const Shelves = () => {
    const [shelveName, setShelveName] = useState("");
    const shelves = useSelector(getShelvesStore, shallowEqual);
    const dispatch = useDispatch();
    const router = useRouter();

    const data = useMemo(
        () =>
            Object.entries(shelves).map(([key, shelve]) => ({
                key,
                ...shelve,
            })),
        [shelves],
    );

    const onInputChange = (e) => {
        setShelveName(e.target.value);
    };

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (shelveName) {
                dispatch(addShelve(shelveName));
            }

            setShelveName("");
        },
        [dispatch, shelveName],
    );

    const onRow = (record) => {
        return {
            onClick: () => router.push(`/shelves/[name]`, `/shelves/${record.key}`),
        };
    };

    return (
        <div>
            <div className={styles.ButtonsContainer}>
                <form className={cn(styles.Actions, styles.Buttons)} onSubmit={onSubmit}>
                    <Input value={shelveName} placeholder="Name" onChange={onInputChange} />
                    <Button type="submit">Add</Button>
                </form>
            </div>
            <Table columns={columns} dataSource={data} onRow={onRow} />
        </div>
    );
};

export default Shelves;
