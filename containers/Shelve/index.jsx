import { Input, Typography } from "antd";
import Head from "next/head";
import PropTypes from "prop-types";
import React, { useCallback, useContext } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import ShelveBooks from "../../components/ShelveBooks";
import ShelveCategory from "../../components/ShelveCategory";
import { BooksContext } from "../../contexts/books";
import { CategoriesContext } from "../../contexts/categories";
import { addBookToShelve, removeBookFromShelve, setShelveCategory, setShelveReview } from "../../redux/actions";
import { getBooksOnShelves, getShelve } from "../../redux/selectors";
import styles from "./styles.module.sass";

const Shelve = ({ name }) => {
    const shelve = useSelector(getShelve(name), shallowEqual);
    const dispatch = useDispatch();
    const categories = useContext(CategoriesContext);
    const books = useContext(BooksContext);
    const booksOnShelves = useSelector(getBooksOnShelves, shallowEqual);

    const onAdd = useCallback((id) => dispatch(addBookToShelve(name, id)), [dispatch, name]);
    const onRemove = useCallback((id) => dispatch(removeBookFromShelve(name, id)), [dispatch, name]);
    const onCategoryChange = useCallback((id) => dispatch(setShelveCategory(name, id)), [dispatch, name]);
    const onReviewChange = useCallback((e) => dispatch(setShelveReview(name, e.target.value)), [dispatch, name]);

    if (!shelve) {
        return (
            <React.Fragment>
                <Head>
                    <title>No such shelve</title>
                </Head>
                <Typography.Title level={1}>No such shelve</Typography.Title>
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
                <Input.TextArea value={shelve.review} rows={4} onChange={onReviewChange} />

                <div className={styles.Spacer} />

                <Typography.Title level={2}>Category</Typography.Title>
                <ShelveCategory value={shelve.category} items={categories} onChange={onCategoryChange} />

                <div className={styles.Spacer} />

                <Typography.Title level={2}>Books</Typography.Title>
                <div>
                    <ShelveBooks
                        value={shelve.books}
                        books={books}
                        category={shelve.category}
                        exclude={booksOnShelves}
                        onAdd={onAdd}
                        onDelete={onRemove}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

Shelve.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Shelve;
