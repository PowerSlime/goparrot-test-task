import {
    ADD_BOOK_TO_SHELVE,
    ADD_SHELVE,
    REMOVE_BOOK_FROM_SHELVE,
    REMOVE_SHELVE,
    SET_SHELVE_CATEGORY,
    SET_SHELVE_REVIEW,
} from "../../actionTypes";

const initialState = {};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_SHELVE:
            if (!(payload.name in state)) {
                return {
                    ...state,
                    [payload.name]: { books: [], category: undefined, review: "" },
                };
            }
            return state;

        case REMOVE_SHELVE: {
            const temp = { ...state };
            delete temp[payload.name];
            return temp;
        }

        case SET_SHELVE_REVIEW: {
            if (payload.name in state) {
                return {
                    ...state,
                    [payload.name]: {
                        ...state[payload.name],
                        review: payload.review,
                    },
                };
            }

            return state;
        }

        case SET_SHELVE_CATEGORY: {
            if (payload.name in state) {
                return {
                    ...state,
                    [payload.name]: {
                        ...state[payload.name],
                        category: payload.id,
                    },
                };
            }

            return state;
        }

        case ADD_BOOK_TO_SHELVE: {
            if (payload.name in state) {
                return {
                    ...state,
                    [payload.name]: {
                        ...state[payload.name],
                        books: state[payload.name].books.concat(payload.id),
                    },
                };
            }

            return state;
        }

        case REMOVE_BOOK_FROM_SHELVE: {
            if (payload.name in state) {
                const books = [...state[payload.name].books];
                const index = books.findIndex((i) => i === payload.id);
                if (index >= 0) {
                    books.splice(index, 1);
                }

                return {
                    ...state,
                    [payload.name]: {
                        ...state[payload.name],
                        books,
                    },
                };
            }

            return state;
        }

        default:
            return state;
    }
};

export default reducer;
