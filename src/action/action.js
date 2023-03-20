import axios from "axios";

import {FETCH_ALL_DATA, LuLuURL} from "../Helper/Helper";
import {json} from "react-router-dom";


// method 1

// export const fetchAllDataInAction = (data)  => {
//
//     return {
//
//         type: 'FETCH_ALL_DATA',
//         payload: data,
//     }
//
// };


// method 2
export const fetchAllDataInAction = () => async dispatch => {
    try {
        let res = await axios.get(LuLuURL);

        // let res = await axios.post(LuLuURL);
        // let res = await axios.post(LuLuURL, filter)
        console.log('res------>', res)
        let data = res.data.rs

        let filters = res.data.rs.filters;

        dispatch({
            type: 'UPDATE_FILTER',
            payload: filters,
        });

        dispatch({
            type: FETCH_ALL_DATA,
            payload: data,
        });
    } catch (err) {
        console.log(err);
    }
};

// update filters
export const updateFilterCriteria = (filters) => {
    return {
        type: 'FETCH_ALL_FILTERS',
        payload: filters
    }
}

// post filters to get new products
export const fetchFilteredProducts = (filters) => async dispatch => {
    try {
        console.log('filters from action ----->',filters);
        let res = await axios.post(LuLuURL, filters)
        console.log('new res------>', res)
        let data = res.data.rs

        dispatch({
            type: FETCH_ALL_DATA,
            payload: data,
        });
    } catch (err) {
        console.log(err);
    }
};
// get subtotalPrice from shopping cart





