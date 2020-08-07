import {
    ADD_BOOK_TO_SHELF,
    ADD_SHELF,
    REMOVE_BOOK_FROM_SHELF,
    REMOVE_SHELF,
    SET_SHELF_CATEGORY,
    SET_SHELF_REVIEW,
} from "./actionTypes";

export const addShelf = (name) => ({
    type: ADD_SHELF,
    payload: {
        name,
    },
});

export const removeShelf = (name) => ({
    type: REMOVE_SHELF,
    payload: {
        name,
    },
});

export const setShelfReview = (shelfName, review) => ({
    type: SET_SHELF_REVIEW,
    payload: {
        name: shelfName,
        review,
    },
});

export const setShelfCategory = (shelfName, categoryId) => ({
    type: SET_SHELF_CATEGORY,
    payload: {
        name: shelfName,
        id: categoryId,
    },
});

export const addBookToShelf = (shelfName, bookId) => ({
    type: ADD_BOOK_TO_SHELF,
    payload: {
        name: shelfName,
        id: bookId,
    },
});

export const removeBookFromShelf = (shelfName, bookId) => ({
    type: REMOVE_BOOK_FROM_SHELF,
    payload: {
        name: shelfName,
        id: bookId,
    },
});
