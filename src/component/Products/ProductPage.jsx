import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


const ProductPage = () => {

    const rawData = useSelector(state => state?.LuLuReducer?.rawData);

    //localstorage can only store string
    localStorage.setItem('rawData', JSON.stringify(rawData));

    const data = JSON.parse( localStorage.getItem('rawData'));

    const products = data?.products;

    const {id} = useParams();

    const currentProduct = products?.[parseInt(id)];


    const name = currentProduct?.name;

    const price = currentProduct?.price;

    const sizes = currentProduct?.sizes;

    const images = currentProduct?.images;

    const swatches = currentProduct?.swatches;

    const featureTitles = currentProduct?.featureTitles;

    const [currentImg, setCurrentImg] = useState(0);

    const [swatchColor, setSwatchColor] = useState(0);

    const [sizeColor, setSizeColor] = useState(null);

    const [cartArr, setCartArr] = useState(null);

    const [sizeValue, setSizeValue] = useState(null);



    return (
        <div>


            {products && currentProduct &&
            <div style={{marginRight: '151.2px', marginLeft: '151.2px', paddingLeft: '25px', paddingRight:'25px'}}>

                <div style={{display:'flex', flexDirection:'row'}}>


                    <div>

                        {/*left arrow btn*/}
                        <button
                            style={{width:'48px', height:'48px'}}
                            onClick={() => {
                                if(currentImg === 0){
                                    setCurrentImg(currentProduct?.images[0]?.mainCarousel?.media?.split('|').length - 1)
                                } else {
                                    setCurrentImg(currentImg - 1)
                                }
                            }}
                        >
                            <img src="https://shop.lululemon.com/static/ecom-web-app/_next/static/images/sprite-126d64.svg#lll-left-chevron-usage" alt="" style={{width: '46px', height:'24px'}}/>
                        </button>

                        <img src={images[0]?.mainCarousel?.media?.split('|')[currentImg]}
                             alt={currentProduct?.name}
                             width='675px'
                             height='810px'/>

                        {/*right arrow btn*/}
                        <button
                            style={{width:'48px', height:'48px'}}
                            onClick={() => {
                                if(currentImg === images[0]?.mainCarousel?.media?.split('|').length - 1){
                                    setCurrentImg(0)
                                } else {
                                    setCurrentImg(currentImg + 1)
                                }
                            }}
                        >
                            <img src="https://shop.lululemon.com/static/ecom-web-app/_next/static/images/sprite-126d64.svg#lll-right-chevron-usage" alt="" style={{width: '46px', height:'24px'}}/>
                        </button>

                        <div>
                            {images[0]?.mainCarousel?.media?.split('|').map((img, index) => {
                                return <img
                                    src={img}
                                    alt={index}
                                    key={index}
                                    style={{width:'36px', height:'36px', marginTop:'16px', marginLeft:'4px', marginRight:'4px'}}
                                    onClick={() => {setCurrentImg(index)}}
                                />
                            })}
                        </div>
                    </div>

                    <div style={{paddingLeft:'12.5px', paddingRight:'12.5px'}}>
                        <div>
                            <h2>productId: {id}</h2>
                            <h1>{name}</h1>
                            <span>{price} CAD</span>
                        </div>

                        <div>
                            {/*swatch*/}
                            <p style={{marginBottom:'8px'}}>Color: {swatches[swatchColor].swatchAlt}</p>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                {swatches.map((swatch, index) => {
                                    return <img
                                        key={index}
                                        id={index}
                                        src={swatch.swatch}
                                        alt={swatch.swatchAlt}
                                        onClick={(e) => {setSwatchColor(e.target.id)}}
                                        style={{borderRadius: '50%', height: '34px', width: '34px', marginRight:'14.4px', marginBottom:'8px'}}
                                    />

                                })}
                            </div>

                            {/*size*/}
                            <div>
                                <div style={{marginBottom:'8px'}}>
                                    <span>Select Size</span>
                                    <button>Size Guide</button>
                                </div>

                                {sizes && sizes[0].details.map((item, index) => {

                                    return <button
                                        key={index}
                                        id={index}
                                        style={{height: '36px', width: '36px', marginRight:'4px', marginLeft:'4px', marginBottom:'16px', borderRadius:'5px', backgroundColor: index === sizeColor ? 'black': 'white', color: index === sizeColor ? 'white': 'black'}}
                                        onClick={(e ) => {setSizeColor(e.target.id);
                                            setSizeValue(item);
                                            // console.log('sizeValue',sizeValue)
                                            }}
                                    >{item}</button>
                                })}
                            </div>

                        </div>

                        {/*add to bag button*/}
                        <button
                            style={{width:'100%', backgroundColor:'#d31334', borderColor:'#d31334', color: '#fff'}}
                            // todo setSizeValue async
                            // onClick={() => {
                            //     {sizeColor ? setCartArr({
                            //         'productName': name,
                            //         'price': price,
                            //         'swatch': swatchColor,
                            //         'size' : sizeValue,
                            //         'qty': 1
                            //     }) : alert('please select a size')};
                            //     console.log('sizevalue from checkout btn',sizeValue)
                            //
                            //  localStorage.setItem('cart', JSON.stringify(cartArr));
                            //     console.log(JSON.parse(localStorage.getItem('cart')));
                            // }}

                        >
                            ADD TO BAG
                        </button>


                        {/*Deatils*/}
                        <div>
                            <ul>
                                {featureTitles.map((title, index) => {
                                    return <li style={{display:'flex', flexDirection:'row'}} key={index}>
                                        <img
                                            key={index}
                                            src={title.iconPath}
                                            alt={title.title}
                                            style={{height: '24px', width: '24px'}}
                                        />

                                        <div style={{marginLeft:'12.5px', marginRight:'12.5px'}}>{title.title}</div>
                                    </li>

                                })}
                            </ul>

                        </div>
                    </div>








                </div>

            </div>
            }



        </div>
    )
}

export default ProductPage;