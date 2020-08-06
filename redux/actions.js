import {
    ADD_BOOK_TO_SHELVE,
    ADD_SHELVE,
    REMOVE_BOOK_FROM_SHELVE,
    REMOVE_SHELVE,
    SET_SHELVE_CATEGORY,
    SET_SHELVE_REVIEW,
} from "./actionTypes";

export const addShelve = (name) => ({
    type: ADD_SHELVE,
    payload: {
        name,
    },
});

export const removeShelve = (name) => ({
    type: REMOVE_SHELVE,
    payload: {
        name,
    },
});

export const setShelveReview = (review) => ({
    type: SET_SHELVE_REVIEW,
    payload: {
        review,
    },
});

export const setShelveCategory = (shelveName, categoryId) => ({
    type: SET_SHELVE_CATEGORY,
    payload: {
        name: shelveName,
        id: categoryId,
    },
});

export const addBookToShelve = (shelveName, bookId) => ({
    type: ADD_BOOK_TO_SHELVE,
    payload: {
        name: shelveName,
        id: bookId,
    },
});

export const removeBookFromShelve = (shelveName, bookId) => ({
    type: REMOVE_BOOK_FROM_SHELVE,
    payload: {
        name: shelveName,
        id: bookId,
    },
});
