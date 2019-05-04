import {PassingStartActionTypes, PassingStartTypes} from "./passingStartTypes";
import {Reducer} from "redux";

export const initialState: PassingStartTypes = {
    passing: null,
    isFetching: false
};

const reducer: Reducer<PassingStartTypes> = (state = initialState, action) => {

    switch (action.type) {
        case PassingStartActionTypes.FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case PassingStartActionTypes.FETCH_RECEIVED:
            return {
                ...state,
                passing: action.data,
                isFetching: false
            };
        case PassingStartActionTypes.FETCH_ERROR:
        case PassingStartActionTypes.UNLOAD:
            return {
                passing: null,
                isFetching: false
            };
        default:
            return state;
    }
};
export {reducer as PassingStartReducer}
