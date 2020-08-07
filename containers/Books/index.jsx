import { Table } from "antd";
import React, { useCallback, useContext, useMemo, useState } from "react";

import BookModal from "../../components/BookModal";
import { BooksContext } from "../../contexts/books";
import { CategoriesContext } from "../../contexts/categories";
import styles from "./styles.module.sass";

const Books = () => {
    const [clickedBook, setClickedBook] = useState(null);

    const books = useContext(BooksContext);
    const categories = useContext(CategoriesContext);

    const categoriesMap = useMemo(() => Object.fromEntries(categories.map((item) => [item.id, item])), [categories]);

    const onModalClose = useCallback(() => setClickedBook(null), []);

    const columns = useMemo(
        () => [
            {
                title: "Title",
                dataIndex: "title",
            },
            {
                title: "Author",
                dataIndex: "author",
            },
            {
                title: "Category",
                dataIndex: "category",
                render: (value) => <div>{categoriesMap[value]?.name}</div>,
            },
            {
                title: "Description",
                dataIndex: "description",
            },
        ],
        [categoriesMap],
    );

    const onRow = useCallback(
        (record) => ({
            onClick: () => setClickedBook(record),
        }),
        [],
    );

    return (
        <React.Fragment>
            <Table className={styles.Table} columns={columns} dataSource={books} rowKey="id" onRow={onRow} />
            <BookModal value={clickedBook} onClose={onModalClose} />
        </React.Fragment>
    );
};

export default Books;
