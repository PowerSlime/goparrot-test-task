import { Select, Tag } from "antd";
import { uniq } from "lodash-es";
import PropTypes from "prop-types";
import React, { useCallback, useMemo } from "react";

import { getAvailableBooks } from "../../utils/books";

const ShelfBooks = ({ value, books, category, exclude, onAdd, onDelete }) => {
    const usedBooks = useMemo(() => uniq(value.concat(exclude)), [exclude, value]);
    const filteredBooks = useMemo(() => (category ? books.filter((book) => book.category === category) : books), [
        books,
        category,
    ]);

    const options = useMemo(() => getAvailableBooks(filteredBooks, usedBooks), [filteredBooks, usedBooks]);
    const booksToRender = value.map((id) => books.find((book) => book.id === id));

    const onSelect = useCallback((id) => onAdd(id), [onAdd]);

    const filter = useCallback((input, option) => {
        const title = option.children.join("");
        return title.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }, []);

    return (
        <div>
            {booksToRender.map((book) => (
                <Tag key={book.id} closable onClose={() => onDelete(book.id)}>
                    {book.title} ({book.author})
                </Tag>
            ))}
            {options.length ? (
                <Select
                    value={null}
                    showSearch
                    placeholder="Book to add"
                    filterOption={filter}
                    style={{ width: "200px" }}
                    onSelect={onSelect}
                >
                    {options.map((book) => (
                        <Select.Option key={book.id} value={book.id}>
                            {book.title} ({book.author})
                        </Select.Option>
                    ))}
                </Select>
            ) : (
                "You can't select a book to add"
            )}
        </div>
    );
};

ShelfBooks.propTypes = {
    value: PropTypes.arrayOf(PropTypes.number),
    exclude: PropTypes.arrayOf(PropTypes.number),
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string,
            title: PropTypes.string,
            category: PropTypes.number,
            description: PropTypes.string,
        }),
    ),
    category: PropTypes.number,
    onAdd: PropTypes.func,
    onDelete: PropTypes.func,
};

ShelfBooks.defaultProps = {
    value: [],
    exclude: [],
    books: [],
    filter: [],
    category: undefined,
    onAdd: () => undefined,
    onDelete: () => undefined,
};

export default ShelfBooks;
