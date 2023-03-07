import {useEffect, useState} from "react";

const EditCart = ({setEdit, productId, cartArr, index}) => {

    const rawData = JSON.parse(localStorage.getItem('rawData'));
    const {products} = rawData;

    const currentEditProduct = products[productId];
    console.log('currentEditProduct', currentEditProduct);

    const name = currentEditProduct?.name;

    const price = currentEditProduct?.price;

    const sizes = currentEditProduct?.sizes;

    const images = currentEditProduct?.images;
    console.log('images', images)

    const swatches = currentEditProduct?.swatches;

    console.log('cartArr', cartArr);
    const [cart, setCart] = useState(cartArr);
    // todo

    // current product index in cartArr
    console.log('index', index);

    const color = cart[index]?.swatch;

    console.log('color', color)

    const currentColorIndex = images?.findIndex((image) => image.colorAlt === color);
    console.log('currentColorIndex', currentColorIndex);

    // find index of different color
    const [imgIndex, setImgIndex] = useState(null);

    const [swatch, setSwatch] = useState(null);


    useEffect(() => {
        setImgIndex(currentColorIndex)
        console.log('swatch', swatch)
    }, [currentColorIndex]);

    // show selected color from cartArr
    useEffect(() => {
        setSwatch(color);
    }, [color]);

    // img carousel
    const [playIndex, setPlayIndex] = useState(0);


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
                {images && swatches &&
                    <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>


                        <div style={{
                            backgroundColor: 'white',
                            width: '1050px',
                            height: '657px',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}>

                            <button
                                style={{right: '5px', position: 'absolute', width: '30px'}}
                                onClick={() => setEdit(false)}
                            >x
                            </button>

                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div style={{width: '548px'}}>
                                    <img
                                        // todo carousel
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

                                <div>
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