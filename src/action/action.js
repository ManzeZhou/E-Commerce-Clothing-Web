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

        dispatch({
            type: FETCH_ALL_DATA,
            payload: data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const fetchAllFiltersInAction = (filters) => {
    return {
        type: 'FETCH_ALL_FILTERS',
        payload: filters
    }
}

export const fetchFilteredProducts = (filters) => async dispatch => {
    try {

        let res = await axios.post(LuLuURL, filters)
        console.log('res------>', res)
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





