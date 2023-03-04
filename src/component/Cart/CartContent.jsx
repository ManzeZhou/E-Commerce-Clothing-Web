import {useEffect, useState} from "react";
import {calculateTotalPrice} from "../../Helper/Helper";

const CartContent = ({i, setCartArr, setSubtotal}) => {

    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [qty, setQty] = useState(parseInt(i.qty));

    const cartArr = localStorage.getItem('cartArr');



    // change qty and price in local storage
    const handleChangeQty = (e) => {
        setQty(e.target.value);
        const cart = JSON.parse(cartArr);
        const indexToChange = cart.findIndex(product => product.productName === i.productName && product.size === i.size && product.swatch === i.swatch)
        console.log('indexToChange', indexToChange)
        const newCartArr = [...cart];
        newCartArr[indexToChange].qty = e.target.value;
        localStorage.setItem('cartArr', JSON.stringify(newCartArr));

        const subtotalPrice = calculateTotalPrice(newCartArr);
        localStorage.setItem('subtotalPrice', subtotalPrice);
        setSubtotal(subtotalPrice);
    }

    useEffect(() => {
        console.log(qty)
    }, [qty]);

    useEffect(() => {
        console.log(JSON.parse(cartArr));
        // generate new subtotal price in localstorage
        console.log('total',JSON.parse(localStorage.getItem('subtotalPrice')))
    }, ['cartArr', cartArr]);


    const handleRemove = () => {
        // remove item from cart
        const cart = JSON.parse(cartArr);
        const indexToChange = cart.findIndex(product => product.productName === i.productName && product.size === i.size && product.swatch === i.swatch);
        console.log('remove index', indexToChange);
        const newCartArr = [...cart];
        newCartArr.splice(indexToChange, 1);
        localStorage.setItem('cartArr', JSON.stringify(newCartArr));
        setCartArr(newCartArr);

        // const priceArr = []
        // newCartArr.map((item) => {
        //     // each item's price should time it's qty
        //
        //     priceArr.push(parseInt(item.price) * item.qty);
        //     console.log('priceArr', priceArr);
        // });
        // let subtotalPrice = priceArr.reduce((a, b) => a + b, 0);

        const subtotalPrice = calculateTotalPrice(newCartArr);
        setSubtotal(subtotalPrice);
        localStorage.setItem('subtotalPrice', subtotalPrice);
    }


    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
                <img src={i.imgURL} alt="" style={{width: '200px', height: '239px'}}/>
            </div>

            <div>
                <h3>{i.productName}</h3>
                <p>{i.swatch}</p>
                <p>Size {i.size}</p>

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <button>Edit</button>

                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span>Item Price</span>
                        <span>$ {i.price}</span>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span>Quantity</span>
                        {parseInt(i.qty) <= 10 ? <select
                            className="custom-select"
                            id="inputGroupSelect01"
                            value={qty}
                            onChange={handleChangeQty}
                        >
                            {options.map((option, index) => {
                                return <option value={option} key={index}>{option}</option>
                            })}
                        </select> : <p>{i.qty}</p>

                        }
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span>Total Price </span>
                        <span>${parseInt(i.price) * parseInt(qty)}.00</span>
                    </div>
                    <button onClick={handleRemove}>remove</button>
                </div>
            </div>

        </div>
    )
}

export default CartContent;
