import { Input, Typography } from "antd";
import Head from "next/head";
import PropTypes from "prop-types";
import React, { useCallback, useContext } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import ShelfBooks from "../../components/ShelfBooks";
import ShelfCategory from "../../components/ShelfCategory";
import { BooksContext } from "../../contexts/books";
import { CategoriesContext } from "../../contexts/categories";
import { addBookToShelf, removeBookFromShelf, setShelfCategory, setShelfReview } from "../../redux/actions";
import { getBooksOnShelves, getShelf } from "../../redux/selectors";
import styles from "./styles.module.sass";

const Shelf = ({ name }) => {
    const shelf = useSelector(getShelf(name), shallowEqual);
    const dispatch = useDispatch();
    const categories = useContext(CategoriesContext);
    const books = useContext(BooksContext);
    const booksOnShelves = useSelector(getBooksOnShelves, shallowEqual);

    const onAdd = useCallback((id) => dispatch(addBookToShelf(name, id)), [dispatch, name]);
    const onRemove = useCallback((id) => dispatch(removeBookFromShelf(name, id)), [dispatch, name]);
    const onCategoryChange = useCallback((id) => dispatch(setShelfCategory(name, id)), [dispatch, name]);
    const onReviewChange = useCallback((e) => dispatch(setShelfReview(name, e.target.value)), [dispatch, name]);

    if (!shelf) {
        return (
            <React.Fragment>
                <Head>
                    <title>No such shelf</title>
                </Head>
                <Typography.Title level={1}>No such shelf</Typography.Title>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Head>
                <title>{name}</title>
            </Head>
            <div>
                <Typography.Title level={1}>{name}</Typography.Title>
                <Input.TextArea value={shelf.review} rows={4} placeholder="Review" onChange={onReviewChange} />

                <div className={styles.Spacer} />

                <Typography.Title level={2}>Category</Typography.Title>
                <ShelfCategory value={shelf.category} items={categories} onChange={onCategoryChange} />

                <div className={styles.Spacer} />

                <Typography.Title level={2}>Books</Typography.Title>
                <div>
                    <ShelfBooks
                        value={shelf.books}
                        books={books}
                        category={shelf.category}
                        exclude={booksOnShelves}
                        onAdd={onAdd}
                        onDelete={onRemove}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

Shelf.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Shelf;
