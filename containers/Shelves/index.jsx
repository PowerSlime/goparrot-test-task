import { Button, Input, Table } from "antd";
import cn from "classnames";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { CategoriesContext } from "../../contexts/categories";
import { addShelf } from "../../redux/actions";
import { getShelvesStore } from "../../redux/selectors";
import styles from "./styles.module.sass";

const Shelves = () => {
    const [shelf, setShelfName] = useState("");
    const shelves = useSelector(getShelvesStore, shallowEqual);
    const dispatch = useDispatch();
    const router = useRouter();
    const categories = useContext(CategoriesContext);

    const data = useMemo(
        () =>
            Object.entries(shelves).map(([key, shelve]) => ({
                key,
                ...shelve,
            })),
        [shelves],
    );

    const columns = useMemo(
        () => [
            {
                title: "Name",
                dataIndex: "key",
            },
            {
                title: "Category",
                dataIndex: "category",
                render: (value) => <div>{categories.find((category) => category.id === value)?.name}</div>,
            },
        ],
        [categories],
    );

    const onInputChange = (e) => {
        setShelfName(e.target.value);
    };

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (shelf) {
                dispatch(addShelf(shelf));
            }

            setShelfName("");
        },
        [dispatch, shelf],
    );

    const onRow = useCallback(
        (record) => {
            return {
                onClick: () => router.push(`/shelves/[name]`, `/shelves/${record.key}`),
            };
        },
        [router],
    );

    return (
        <div>
            <div className={styles.ButtonsContainer}>
                <form className={cn(styles.Actions, styles.Buttons)} onSubmit={onSubmit}>
                    <Input value={shelf} placeholder="Name" onChange={onInputChange} />
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </form>
            </div>
            <Table className={styles.Table} columns={columns} dataSource={data} onRow={onRow} />
        </div>
    );
};

export default Shelves;
