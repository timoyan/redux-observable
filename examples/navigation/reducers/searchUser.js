import { createAction, createReducer } from "redux-act";

export const SearchUserRequest = createAction(
    "SearchUserRequest",
    payload => payload
);
export const SearchUserResponse = createAction(
    "SearchUserRequest",
    payload => payload
);

export const githubReducer = createReducer(
    {
        [SearchUserRequest]: (state, payload) => {
            const { query } = payload;
            return {
                ...state,
                searchWord: query,
                loading: true
            };
        },
        [SearchUserResponse]: (state, payload) => {
            const { data } = payload;
            return {
                ...state,
                results: data,
                loading: false
            };
        }
    },
    {
        searchWord: "",
        results: [],
        loading: false
    }
);
