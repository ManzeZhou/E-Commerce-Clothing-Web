

const initState = {
    allFilters: null,
}

export const FiltersReducer = (state=initState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_FILTERS':
            return {...state, allFilters: action?.payload}
        default:
            return state
    }
};