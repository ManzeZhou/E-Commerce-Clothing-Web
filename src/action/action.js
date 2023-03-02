import axios from "axios";
import {useEffect, useState} from "react";
import {FETCH_ALL_DATA, FETCH_CART_ITEM, LuLuURL} from "../Helper/Helper";

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





