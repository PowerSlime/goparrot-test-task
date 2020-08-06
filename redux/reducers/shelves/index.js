import {
    ADD_BOOK_TO_SHELF,
    ADD_SHELF,
    REMOVE_BOOK_FROM_SHELF,
    REMOVE_SHELF,
    SET_SHELF_CATEGORY,
    SET_SHELF_REVIEW,
} from "../../actionTypes";

const initialState = {};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_SHELF:
            if (!(payload.name in state)) {
                return {
                    ...state,
                    [payload.name]: { books: [], category: undefined, review: "" },
                };
            }
            return state;

        case REMOVE_SHELF: {
            const temp = { ...state };
            delete temp[payload.name];
            return temp;
        }

        case SET_SHELF_REVIEW: {
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

        case SET_SHELF_CATEGORY: {
            if (payload.name in state) {
                return {
                    ...state,
                    [payload.name]: {
                        ...state[payload.name],
                        category: payload.id,
                        books: [],
                    },
                };
            }

            return state;
        }

        case ADD_BOOK_TO_SHELF: {
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

        case REMOVE_BOOK_FROM_SHELF: {
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
