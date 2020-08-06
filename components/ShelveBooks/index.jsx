import { Select, Tag } from "antd";
import { uniq } from "lodash-es";
import PropTypes from "prop-types";
import React, { useCallback, useMemo } from "react";

import { getAvailableBooks } from "../../utils/books";

const ShelveBooks = ({ value, books, exclude, onAdd, onDelete }) => {
    const usedBooks = useMemo(() => uniq(value.concat(exclude)), [exclude, value]);

    const options = useMemo(() => getAvailableBooks(books, usedBooks), [books, usedBooks]);
    const booksToRender = value.map((id) => books.find((book) => book.id === id));

    const onSelect = useCallback((id) => onAdd(id), [onAdd]);

    return (
        <div>
            {booksToRender.map((book) => (
                <Tag key={book.id} closable onClose={() => onDelete(book.id)}>
                    {book.title} ({book.author})
                </Tag>
            ))}
            {options.length ? (
                <Select value={null} placeholder="Book to add" onSelect={onSelect}>
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

ShelveBooks.propTypes = {
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
    onAdd: PropTypes.func,
    onDelete: PropTypes.func,
};

ShelveBooks.defaultProps = {
    value: [],
    exclude: [],
    books: [],
    filter: [],
    onAdd: () => undefined,
    onDelete: () => undefined,
};

export default ShelveBooks;
