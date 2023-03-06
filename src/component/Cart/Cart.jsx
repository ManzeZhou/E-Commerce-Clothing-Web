import CartContent from "./CartContent";
import OrderSummary from "./OrderSummary";
import {useEffect, useState} from "react";
import EditCart from "./EditCart";


const Cart = () => {

    //update cartArr and CartContent display when remove item from cart
    const [cartArr, setCartArr] = useState(JSON.parse(localStorage.getItem('cartArr')));

    // update subtotal price when changing items qty and remove items from cart
    const [subtotal, setSubtotal] = useState(JSON.parse(localStorage.getItem('subtotalPrice')));

    // show edit page with target id
    const [productId, setProductId] = useState(null);

    const handleClear = () => {
        localStorage.clear();
    }

    const [itemQty, setItemQty] = useState(0);

    // Edit Cart after clicking edit button
    const [edit, setEdit] = useState(false);

    const [index, setIndex] = useState(null);


    return (

        <div>
            <button onClick={handleClear}>clear cart</button>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <div>
                    <h1>My Bag ({itemQty}{itemQty === 0 || itemQty === 1 ? 'Item' : 'Items'})</h1>
                    {cartArr ? cartArr.map((i, index) => {
                        return <CartContent key={index} id={index} setIndex={setIndex} i={i} setCartArr={setCartArr} setSubtotal={setSubtotal}
                                            setItemQty={setItemQty} setEdit={setEdit} setProductId = {setProductId}/>
                    }) : 'Give your bag some love!'}

                </div>


                <OrderSummary subtotal={subtotal}/>

            </div>


            <div style={{display: edit ? 'block' : 'none'}}>
                <EditCart setEdit={setEdit} productId={productId} cartArr={cartArr} index={index}/>
            </div>

        </div>

    )
}

export default Cart;