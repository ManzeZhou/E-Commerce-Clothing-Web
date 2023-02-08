import axios from "axios";
import {useEffect, useState} from "react";

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
        let res = await axios.get('http://api-lulu.hibitbyte.com/product/allProducts?mykey=Rfm0EUSj65L0PPLEQPxIXNgmIQX1QrP2Op2pqJLrpdBPrJO1EhE9YIPA1yOv9tXhjamor5vGwY6cnzQ7hRVy7Q==');
        let data = res.data.rs

        dispatch({
            type: 'FETCH_ALL_DATA',
            payload: data,
        });
    } catch (err) {
        console.log(err);
    }
};

