
export const FETCH_ALL_DATA = 'FETCH_ALL_DATA';

export const LuLuURL = 'http://api-lulu.hibitbyte.com/product/allProducts?mykey=Rfm0EUSj65L0PPLEQPxIXNgmIQX1QrP2Op2pqJLrpdBPrJO1EhE9YIPA1yOv9tXhjamor5vGwY6cnzQ7hRVy7Q==';

export const calculateTotalPrice = (cart) => {
    const priceArr = []
    cart.map((item) => {
        // each item's price should time it's qty

        priceArr.push(parseInt(item.price) * item.qty);
        console.log('priceArr', priceArr);
    });
    return priceArr.reduce((a, b) => a + b, 0);
}