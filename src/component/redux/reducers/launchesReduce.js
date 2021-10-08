import { ActionTypes } from "../contants/action-types"

const initialState = {
    launches: [],
};

export const launchesReduce = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_LAUNCHES:
            return {...state, launches: payload};
        default:
            return state;
    }
}

export const selectedLaunchesReduce = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_LAUNCHES:
            return {...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_LAUNCHES:
            return {};    
        default:
            return state;    
    }
};
