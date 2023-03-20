import {fetchFilteredProducts, updateFilterCriteria} from "../action/action";

export const FETCH_ALL_DATA = 'FETCH_ALL_DATA';

export const LuLuURL = 'http://api-lulu.hibitbyte.com/product/allProducts?mykey=Rfm0EUSj65L0PPLEQPxIXNgmIQX1QrP2Op2pqJLrpdBPrJO1EhE9YIPA1yOv9tXhjamor5vGwY6cnzQ7hRVy7Q==';

// export const LuLuURL = 'http://api-lulu.hibitbyte.com/product/allProducts?sortingId=2&page=2&mykey=Rfm0EUSj65L0PPLEQPxIXNgmIQX1QrP2Op2pqJLrpdBPrJO1EhE9YIPA1yOv9tXhjamor5vGwY6cnzQ7hRVy7Q==';

export const calculateTotalPrice = (cart) => {
    const priceArr = []
    cart.map((item) => {
        // each item's price should time it's qty

        priceArr.push(parseInt(item.price) * item.qty);
        console.log('priceArr', priceArr);
    });
    return priceArr.reduce((a, b) => a + b, 0);
}

// export const checkFilterIsChecked = (selected, filters, filterTitle,dispatch, filterName) => {
//     if(selected){
//         let newFilters = {...filters}
//
//         let GenderArr = newFilters[filterTitle]
//
//         const indexToChange = GenderArr.findIndex(item => item.name === filterName);
//         if(indexToChange !== -1) {
//             GenderArr[indexToChange].isChecked = true;
//             dispatch(updateFilterCriteria(newFilters));
//             dispatch(fetchFilteredProducts(newFilters));
//         }
//     } else {
//         let newFilters = {...filters}
//         console.log('newFilters',newFilters)
//         let GenderArr = newFilters[filterTitle]
//         console.log('GenderArr',GenderArr)
//         const indexToChange = GenderArr.findIndex(item => item.name === filterName);
//         if(indexToChange !== -1) {
//             GenderArr[indexToChange].isChecked = false;
//
//             console.log('GenderArr',GenderArr)
//             dispatch(updateFilterCriteria(newFilters));
//             dispatch(fetchFilteredProducts(newFilters));
//         }
//     }
//
// }