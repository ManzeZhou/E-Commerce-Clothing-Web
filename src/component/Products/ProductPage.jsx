import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {calculateTotalPrice} from "../../Helper/Helper";


const ProductPage = () => {


    const rawData = useSelector(state => state?.LuLuReducer?.rawData);

    //localstorage can only store string
    localStorage.setItem('rawData', JSON.stringify(rawData));

    const data = JSON.parse(localStorage.getItem('rawData'));

    const products = data?.products;

    const {id} = useParams();

    const currentProduct = products?.[parseInt(id)];
    console.log(currentProduct)

    const name = currentProduct?.name;

    const price = currentProduct?.price;

    const sizes = currentProduct?.sizes;

    console.log(sizes)

    const images = currentProduct?.images;

    const swatches = currentProduct?.swatches;

    const featureTitles = currentProduct?.featureTitles;

    const [currentImg, setCurrentImg] = useState(0);

// swatch
    const [swatchColor, setSwatchColor] = useState(0);

// size id
    const [sizeColor, setSizeColor] = useState(null);
// size value for shopping cart
    const [sizeValue, setSizeValue] = useState(null);
// swatch value for shopping cart
    const [swatchValue, setSwatchValue] = useState(null);

    useEffect(() => {
        console.log('sizeColor', sizeColor);
    }, [sizeColor]);


    const addToCart = (name, price, sizes) => {

        if (sizeColor || sizes[0]?.details.length === 0) {
            const cartItem = {
                'productName': name,
                'price': price.replace(/\$/g, '').replace(/\sCAD/g, ''),
                'swatch': swatchValue,
                'size': sizes[0]?.details.length === 0 ? 'default' : sizeValue,
                'qty': 1,
                'imgURL': images[swatchColor]?.mainCarousel?.media?.split('|')[currentImg],
            }

            // localStorage.clear();

            if (!localStorage.getItem('cartArr')) {

                let newCartItems = [{...cartItem}];
                localStorage.setItem('cartArr', JSON.stringify(newCartItems));
                console.log('cartArr', JSON.parse(localStorage.getItem('cartArr')));
            } else {
                const cartLocal = JSON.parse(localStorage.getItem('cartArr'));

                const indexToChange = cartLocal.findIndex(i => i.productName === name && i.swatch === swatchValue && (i.size === sizeValue || i.size === 'default'));
                console.log('indexToChange', indexToChange);

                // find the same item
                if (indexToChange !== -1) {
                    const newCartLocal = [...cartLocal]
                    newCartLocal[indexToChange].qty = parseInt(newCartLocal[indexToChange].qty) + 1;
                    console.log('newCartLocal', newCartLocal)

                    localStorage.setItem('cartArr', JSON.stringify(newCartLocal));


                } else {
                    let newCartItems = [...cartLocal, {...cartItem}];
                    localStorage.setItem('cartArr', JSON.stringify(newCartItems));
                }

                console.log('cartArr', JSON.parse(localStorage.getItem('cartArr')));

            }
        }
        setSizeColor(null);

    };

    // show cart patch after clicking add to cart button
    const [show, setShow] = useState(false);

    // show totalPrice
    const [total, setTotal] = useState(null);

    // show total products qty
    const [totalQty, setTotalQty] = useState(null);

    const cartArr = JSON.parse(localStorage.getItem('cartArr'));
    useEffect(() => {
        console.log('cartArr', cartArr)
    })


// calculate total price in shopping cart
    useEffect(() => {

        if (cartArr) {
            // if shopping cart is empty, doesn't need to calculate, just show the current product price

            const total = (localStorage.getItem('subtotalPrice'))
            if (!total) {

                setTotal(price);
                localStorage.setItem('subtotalPrice', JSON.stringify(price));
                console.log('subtotalPrice from localStorage', JSON.parse(localStorage.getItem('subtotalPrice')));

            } else {
                const newCartArr = [...cartArr];
                // priceArr for check subtotalPrice and push each cartItem price into it
                console.log('newCartArr', newCartArr)
                // const priceArr = []
                // newCartArr.map((item) => {
                // // each item's price should time it's qty
                //
                //     // priceArr.push(parseInt(item.price.replace(/\$/g, '').replace(/\sCAD/g, '')) * item.qty);
                //     priceArr.push(parseInt(item.price) * item.qty);
                //     console.log('priceArr', priceArr);
                //
                // });
                //
                // let subtotalPrice = priceArr.reduce((a, b) => a + b, 0);

                const subtotalPrice = calculateTotalPrice(newCartArr);
                localStorage.setItem('subtotalPrice', subtotalPrice);
                console.log('subtotalPrice', subtotalPrice);
                setTotal(subtotalPrice)
                localStorage.setItem('subtotalPrice', JSON.stringify(subtotalPrice));
                console.log('subtotalPrice from localStorage', JSON.parse(localStorage.getItem('subtotalPrice')));


            }
        }
        // get product total qty

        const itemArr = [];

        cartArr.map((item) => {
            itemArr.push(parseInt(item.qty));
            console.log('itemArr',itemArr)
        });
        const itemTotalQty = itemArr.reduce((a, b) => a + b, 0);
        console.log('itemTotalQty',itemTotalQty);
        setTotalQty(itemTotalQty);

        // const subTotalPrice = JSON.parse(localStorage.getItem('subtotalPrice'));
        // console.log('subTotalPrice from useEffect', subTotalPrice);


    }, [cartArr]);


    return (
        <div>

            <div>
                {products && currentProduct && images &&

                    <div style={{
                        marginRight: '151.2px',
                        marginLeft: '151.2px',
                        paddingLeft: '25px',
                        paddingRight: '25px'
                    }}>

                        <div style={{display: 'flex', flexDirection: 'row'}}>


                            <div>

                                {/*left arrow btn*/}
                                <button
                                    style={{width: '48px', height: '48px'}}
                                    onClick={() => {
                                        if (currentImg === 0) {
                                            setCurrentImg(currentProduct?.images[0]?.mainCarousel?.media?.split('|').length - 1)
                                        } else {
                                            setCurrentImg(currentImg - 1)
                                        }
                                    }}
                                >
                                    <img
                                        src="https://shop.lululemon.com/static/ecom-web-app/_next/static/images/sprite-126d64.svg#lll-left-chevron-usage"
                                        alt="" style={{width: '46px', height: '24px'}}/>
                                </button>

                                <img src={images[swatchColor]?.mainCarousel?.media?.split('|')[currentImg]}
                                     alt={currentProduct?.name}
                                     width='675px'
                                     height='810px'/>

                                {/*right arrow btn*/}
                                <button
                                    style={{width: '48px', height: '48px'}}
                                    onClick={() => {
                                        if (currentImg === images[swatchColor]?.mainCarousel?.media?.split('|').length - 1) {
                                            setCurrentImg(0)
                                        } else {
                                            setCurrentImg(currentImg + 1)
                                        }
                                    }
                                    }
                                >
                                    <img
                                        src="https://shop.lululemon.com/static/ecom-web-app/_next/static/images/sprite-126d64.svg#lll-right-chevron-usage"
                                        alt="" style={{width: '46px', height: '24px'}}/>
                                </button>

                                <div>
                                    {images[swatchColor]?.mainCarousel?.media?.split('|').map((img, index) => {
                                        return <img
                                            src={img}
                                            alt={index}
                                            key={index}
                                            style={{
                                                width: '36px',
                                                height: '36px',
                                                marginTop: '16px',
                                                marginLeft: '4px',
                                                marginRight: '4px'
                                            }}
                                            onClick={() => {
                                                setCurrentImg(index)
                                            }}
                                        />
                                    })}
                                </div>
                            </div>

                            <div style={{paddingLeft: '12.5px', paddingRight: '12.5px'}}>
                                <div>
                                    <h2>productId: {id}</h2>
                                    <h1>{name}</h1>
                                    <span>{price} CAD</span>
                                </div>

                                <div>
                                    {/*swatch*/}
                                    <p style={{marginBottom: '8px'}}>Color: {swatches[swatchColor].swatchAlt}</p>
                                    <div style={{display: 'flex', flexDirection: 'row'}}>
                                        {swatches.map((swatch, index) => {
                                            return <img
                                                key={index}
                                                id={index}
                                                src={swatch.swatch}
                                                alt={swatch.swatchAlt}
                                                onClick={(e) => {
                                                    setSwatchColor(e.target.id);
                                                    setSwatchValue(swatch.swatchAlt);

                                                }}
                                                style={{
                                                    borderRadius: '50%',
                                                    height: '34px',
                                                    width: '34px',
                                                    marginRight: '14.4px',
                                                    marginBottom: '8px'
                                                }}
                                            />

                                        })}
                                    </div>

                                    {/*size*/}
                                    <div>
                                        <div style={{marginBottom: '8px'}}>
                                            <span>Select Size</span>
                                            <button>Size Guide</button>
                                        </div>

                                        {sizes && sizes[0].details.map((item, index) => {

                                            return <button
                                                key={index}
                                                id={index}
                                                style={{
                                                    height: '36px',
                                                    width: '36px',
                                                    marginRight: '4px',
                                                    marginLeft: '4px',
                                                    marginBottom: '16px',
                                                    borderRadius: '5px',
                                                    backgroundColor: parseInt(index) === parseInt(`${sizeColor}`) ? 'black' : 'white',
                                                    color: parseInt(index) === parseInt(`${sizeColor}`) ? 'white' : 'black'
                                                }}
                                                onClick={(e) => {
                                                    // todo bgcolor doesn't change
                                                    setSizeColor(e.target.id);
                                                    setSizeValue(item);

                                                }}
                                            >{item}</button>
                                        })}
                                    </div>

                                </div>

                                {/*add to bag button*/}
                                <button
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#d31334',
                                        borderColor: '#d31334',
                                        color: '#fff'
                                    }}
                                    // set shopping cart Arr in local storage
                                    onClick={() => {
                                        addToCart(name, price, sizes);
                                        // if the product does not have a size, show patch
                                        if (sizes[0]?.details.length === 0) {
                                            setShow(true)
                                        }
                                        // if the product has a size but not selected, do not show patch
                                        else if (sizes[0]?.details.length !== 0 && !sizeColor) {
                                            alert('please select a size');
                                        } else if (sizes[0]?.details.length !== 0 && sizeColor) {
                                            setShow(true)
                                        }
                                    }}

                                >
                                    ADD TO BAG
                                </button>


                                {/*Deatils*/}
                                <div>
                                    <ul>
                                        {featureTitles.map((title, index) => {
                                            return <li style={{display: 'flex', flexDirection: 'row'}} key={index}>
                                                <img
                                                    key={index}
                                                    src={title.iconPath}
                                                    alt={title.title}
                                                    style={{height: '24px', width: '24px'}}
                                                />

                                                <div style={{
                                                    marginLeft: '12.5px',
                                                    marginRight: '12.5px'
                                                }}>{title.title}</div>
                                            </li>

                                        })}
                                    </ul>

                                </div>
                            </div>


                        </div>

                    </div>
                }


                <div>
                    <Link to='/cart'>
                        <button>Check my cart</button>
                    </Link>
                </div>
            </div>

            {/*shopping cart patch*/}


            <div
                style={{
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    paddingBottom: '104px',
                    paddingTop: '104px',
                    backgroundColor: 'rgba(99,99,99,.6)',
                    zIndex: 106,
                    opacity: 1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: show ? 'block' : 'none'


                }}>
                <div style={{paddingLeft: '25px', paddingRight: '25px'}}>
                    <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                        <div style={{
                            marginBottom: '35px',
                            marginTop: '22px',
                            border: '0.8px',
                            paddingLeft: '12.5px',
                            paddingRight: '12.5px'
                        }}>

                            <div style={{
                                backgroundColor: 'white',
                                width: '750px',
                                height: '800px',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative'
                            }}>

                                <button
                                    style={{right: '5px', position: 'absolute', width: '30px'}}
                                    onClick={() => {
                                        setShow(false)
                                    }}
                                >x
                                </button>

                                <div style={{paddingLeft: '15px', paddingRight: '15px', paddingTop: '20px'}}>

                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-around'
                                    }}>
                                        <h1>Add To Your Bag</h1>

                                        <p>{totalQty}items</p>
                                    </div>


                                    <div>

                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-around'
                                        }}>
                                            <div style={{height: "126px", width: '151px'}}>


                                                {images &&
                                                    <img
                                                        src={images[swatchColor]?.mainCarousel?.media?.split('|')[currentImg]}
                                                        alt=""
                                                        style={{height: 'auto', width: '100%'}}
                                                    />

                                                }


                                            </div>

                                            {
                                                sizes &&
                                                <div style={{paddingLeft: '12.5px', paddingRight: '12.5px'}}>
                                                    <h3>{name}</h3>

                                                    <p>size: {sizes[0]?.details.length === 0 ? 'default' : `${sizeValue}`}</p>

                                                    <p>price: {price}</p>
                                                </div>
                                            }


                                            <div style={{paddingLeft: '20px'}}>


                                                <h3>Subtotal: ${total} CAD
                                                </h3>


                                                <Link to='/cart'>
                                                    <button>VIEW BAG & CHECKOUT</button>
                                                </Link>
                                                <p>CONTINUE SHOPPING -></p>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductPage;