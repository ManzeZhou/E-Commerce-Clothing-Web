import {FETCH_ALL_DATA} from "../Helper/Helper";



const initState = {
    rawData: null,
    filterCriteria: null,
}

export const LuLuReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_ALL_DATA:
            return {...state, rawData: action?.payload};

        case 'UPDATE_FILTER':
            return {...state, filterCriteria: action?.payload}

        default:
            return state
    }
};