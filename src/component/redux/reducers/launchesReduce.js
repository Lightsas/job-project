import { ActionTypes } from "../contants/action-types"

const initialState = {
    launches: [
        {
        id: 1,
        title: "Dipesh",
        category: "programmer",
    },
],
};

export const launchesReduce = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_LAUNCHES:
            return state;
        default:
            return state;
    }
}