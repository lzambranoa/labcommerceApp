import { types } from "../types/types";

const initialState = {
    results:      [],
    filtered:     [],
    categories:   [],
    users:        []
};

export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SEARCH_PRODUCTS:
            return {
                ...state,
                results: action.payload,
            };

        case types.SEARCH_BY_CATEGORY:
            return {
                ...state,
                results: action.payload,
            }
        case types.GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        default:
            return state;
    }
}