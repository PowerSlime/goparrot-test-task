import { Table } from "antd";
import React, { useCallback, useContext, useMemo, useState } from "react";

import { BooksContext } from "../../contexts/books";
import { CategoriesContext } from "../../contexts/categories";

const Books = () => {
    const [selected, setSelected] = useState([]);

    const books = useContext(BooksContext);
    const categories = useContext(CategoriesContext);
    const data = useMemo(() => books.map((book) => ({ key: book.id, ...book })), [books]);

    const categoriesMap = useMemo(() => Object.fromEntries(categories.map((item) => [item.id, item])), [categories]);

    const onSelectChange = useCallback((items) => {
        setSelected(items);
    }, []);

    const rowSelection = {
        selectedRowKeys: selected,
        onChange: onSelectChange,
    };

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

    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
};

export default Books;
