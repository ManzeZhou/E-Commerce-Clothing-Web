

export const FETCH_ALL_DATA = 'FETCH_ALL_DATA';

const API_KEY= process.env.REACT_APP_API_KEY
export const LuLuURL = `http://api-lulu.hibitbyte.com/product/allProducts?mykey=${API_KEY}`


export const calculateTotalPrice = (cart) => {
    const priceArr = []
    cart.map((item) => {
        // each item's price should time it's qty

        priceArr.push(parseInt(item.price) * item.qty);
        console.log('priceArr', priceArr);
    });
    return priceArr.reduce((a, b) => a + b, 0);
}


