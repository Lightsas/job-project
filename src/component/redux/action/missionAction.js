import { ActionTypes } from "../contants/action-types";
export const setLaunches = (launches) => {
    return {
        type:ActionTypes.SET_LAUNCHES,
        payload: launches,
    };
};

export const selectedLaunches = (launches) => {
    return {
        type: ActionTypes.SELECTED_LAUNCHES,
        payload: launches,
    };
};