import { TOGGLE_THEME } from "../../actionTypes";

const initialState = {
    isDark: false,
};

const reducer = (state = initialState, { type }) => {
    switch (type) {
        case TOGGLE_THEME:
            return {
                ...state,
                isDark: !state.isDark,
            };

        default:
            return state;
    }
};

export default reducer;
