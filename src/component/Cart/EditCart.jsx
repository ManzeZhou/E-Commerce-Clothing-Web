import {useEffect, useState} from "react";

const EditCart = ({setEdit, productId, cartArr, index, setCartArr}) => {

    const rawData = JSON.parse(localStorage.getItem('rawData'));
    const {products} = rawData;

    const currentEditProduct = products[productId];
    console.log('currentEditProduct', currentEditProduct);

    const name = currentEditProduct?.name;

    const price = currentEditProduct?.price;

    const sizes = currentEditProduct?.sizes;
    console.log('sizes',sizes)
    const images = currentEditProduct?.images;
    console.log('images', images)

    const swatches = currentEditProduct?.swatches;

    console.log('cartArr', cartArr);

    // current product index in cartArr
    console.log('index', index);

    const color = cartArr[index]?.swatch;
    const size = cartArr[index]?.size;
    const quantity =cartArr[index]?.qty;


    console.log('color', color)

    const currentColorIndex = images?.findIndex((image) => image.colorAlt === color);
    console.log('currentColorIndex', currentColorIndex);

    // find index of different color
    const [imgIndex, setImgIndex] = useState(null);

    const [swatch, setSwatch] = useState(null);
    // selected size from cartArr
    const [selectSize, setSelectedSize] = useState(null);


    useEffect(() => {
        setImgIndex(currentColorIndex)
        console.log('swatch', swatch)
    }, [currentColorIndex]);

    // show selected color from cartArr
    useEffect(() => {
        setSwatch(color);
    }, [color, cartArr]);

    // img carousel
    const [playIndex, setPlayIndex] = useState(0);

    useEffect(() => {
        setSelectedSize(size)
    }, [size, cartArr]);


    const handleUpdate = () => {
        // todo if change one product size/swatch to exact same with the other product, combine two of them

        // const newCart = [...cartArr];
        // newCart[index].swatch = swatch;
        // // if only has one size, then do not change size
        // if(sizes[0].details.length !== 0) {
        //     newCart[index].size = selectSize;
        // }
        // newCart[index].imgURL = images[imgIndex]?.mainCarousel?.media?.split('|')[0];
        // console.log('newCart',newCart);
        // setCartArr(newCart);
        // localStorage.setItem('cartArr', JSON.stringify(newCart));

        const indexToChange = cartArr.findIndex(i => i.productName === name && i.swatch === swatch && (i.size === selectSize || i.size === 'ONE SIZE'));
        // if find the same product, change qty
        if(indexToChange !== -1){
            console.log('indexToChange ---->',indexToChange);
            console.log('index ----->',index)
            const newCartArr = [...cartArr]
            newCartArr[indexToChange].qty += quantity;
            // delete the original object
            newCartArr.splice(index, 1);

            setCartArr(newCartArr);
            localStorage.setItem('cartArr', JSON.stringify(newCartArr));
        } else {
            const newCart = [...cartArr];
            newCart[index].swatch = swatch;
            // if only has one size, then do not change size
            if(sizes[0].details.length !== 0) {
                newCart[index].size = selectSize;
            }
            newCart[index].imgURL = images[imgIndex]?.mainCarousel?.media?.split('|')[0];
            console.log('newCart',newCart);
            setCartArr(newCart);
            localStorage.setItem('cartArr', JSON.stringify(newCart));
        }

        setEdit(false);
    }
    useEffect(() => {
        console.log('cartArr from edit page',cartArr)
    }, [cartArr])




    return (

        <div
            style={{
                paddingLeft: '15px',
                paddingRight: '15px',
                paddingBottom: '104px',
                paddingTop: '104px',
                background: 'rgba(0,0,0,.3)',
                zIndex: 106,
                opacity: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
            }}
        >
            <div style={{paddingLeft: '25px', paddingRight: '25px'}}>
                {cartArr && images && swatches && sizes &&
                    <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>


                        <div style={{
                            backgroundColor: 'white',
                            width: '1050px',
                            height: '657px',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}>

                            {/*<button*/}
                            {/*    style={{right: '5px', position: 'absolute', width: '30px'}}*/}
                            {/*    onClick={() => setEdit(false)}*/}
                            {/*>x*/}
                            {/*</button>*/}

                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div style={{width: '548px'}}>
                                    <img
                                        src={images[imgIndex]?.mainCarousel?.media?.split('|')[playIndex]}
                                        alt="" style={{maxWidth: '100%'}}/>
                                    <button
                                        style={{width: '30px'}}
                                        onClick={() => {
                                            if (playIndex === images[imgIndex]?.mainCarousel?.media?.split('|').length - 1) {
                                                setPlayIndex(0)
                                            } else {
                                                setPlayIndex(playIndex + 1);
                                            }
                                        }}
                                    > >
                                    </button>
                                </div>

                                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                    <h1>product name: {name}</h1>
                                    <p>{price}</p>
                                    <span>color: {swatch}</span>
                                    <div style={{display: 'flex', flexDirection: 'row'}}>
                                        {swatches.map((swatch, index) => {
                                            return <img
                                                key={index}
                                                id={index}
                                                src={swatch.swatch}
                                                alt={swatch.swatchAlt}
                                                style={{
                                                    borderRadius: '50%',
                                                    height: '34px',
                                                    width: '34px',
                                                    marginRight: '14.4px',
                                                    marginBottom: '8px'
                                                }}
                                                onClick={() => {
                                                    setSwatch(swatch.swatchAlt)
                                                    setImgIndex(index)
                                                    setPlayIndex(0)
                                                }}
                                            />

                                        })}
                                    </div>
                                    <span>Size:</span>

                                    <div>
                                        {sizes[0].details.length === 0 ? 'ONE SIZE':
                                        sizes[0].details.map((item, index) => {

                                                return <button
                                                    key={index}
                                                    id={item}
                                                    style={{
                                                        height: '36px',
                                                        width: '36px',
                                                        marginRight: '4px',
                                                        marginLeft: '4px',
                                                        marginBottom: '16px',
                                                        borderRadius: '5px',
                                                        backgroundColor: String(item) === String(selectSize) ? 'black' : 'white',
                                                        color: String(item) === String(selectSize)  ? 'white' : 'black'
                                                    }}
                                                    onClick={(e) => setSelectedSize(e.target.id)}
                                                >{item}</button>
                                            })

                                    }

                                    </div>
                                    <button
                                        onClick={handleUpdate}
                                    >UPDATE ITEM</button>
                                </div>
                            </div>

                        </div>

                    </div>
                }
            </div>
        </div>


    )
};
export default EditCart;