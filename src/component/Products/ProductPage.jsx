import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


const ProductPage = () => {

    const rawData = useSelector(state => state?.LuLuReducer?.rawData);

    //localstorage can only store string
    localStorage.setItem('rawData', JSON.stringify(rawData));

    const data = JSON.parse( localStorage.getItem('rawData'));

    console.log('data',data);

    const products = data?.products;

    const {id} = useParams();

    const currentProduct = products?.[parseInt(id)];


    const name = currentProduct?.name;

    const price = currentProduct?.price;

    const sizes = currentProduct?.sizes;

    const images = currentProduct?.images;

    const swatches = currentProduct?.swatches;

    const featureTitles = currentProduct?.featureTitles;

    const [currentImg, setCurrentImg] = useState(0)


    return (
        <div>


            {products && currentProduct &&
            <div style={{marginRight: '151.2px', marginLeft: '151.2px', paddingLeft: '25px', paddingRight:'25px'}}>

                <div>


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

                        <img src={currentProduct?.images[0]?.mainCarousel?.media?.split('|')[currentImg]}
                             alt={currentProduct?.name}
                             width='675px'
                             height='810px'/>

                        {/*right arrow btn*/}
                        <button
                            style={{width:'48px', height:'48px'}}
                            onClick={() => {
                                if(currentImg === currentProduct?.images[0]?.mainCarousel?.media?.split('|').length - 1){
                                    setCurrentImg(0)
                                } else {
                                    setCurrentImg(currentImg + 1)
                                }
                            }}
                        >
                            <img src="https://shop.lululemon.com/static/ecom-web-app/_next/static/images/sprite-126d64.svg#lll-right-chevron-usage" alt="" style={{width: '46px', height:'24px'}}/>
                        </button>

                        <div>
                            {currentProduct?.images[0]?.mainCarousel?.media?.split('|').map((img, index) => {
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

                    <h2>productId: {id}</h2>
                    <h2>{name}</h2>
                    <h2>{price}</h2>

                    <div>
                        {swatches.map((swatch, index) => {
                            return <img
                                key={index}
                                src={swatch.swatch}
                                alt={swatch.swatchAlt}
                                style={{borderRadius: '50%', height: '20px', width: '20px'}}
                            />
                        })}
                    </div>

                    <div>
                        {sizes && sizes[0].details.map((item, index) => {

                            return <button
                                key={index}
                                style={{height: '20px', width: '20px'}}
                            >{item}</button>
                        })}
                    </div>

                    <button>ADD TO BAG</button>

                    {featureTitles.map((title, index) => {
                        return <div>
                            <img
                                key={index}
                                src={title.iconPath}
                                alt={title.title}
                                style={{height: '20px', width: '20px'}}
                            />

                            <div>{title.title}</div>
                        </div>

                    })}
                </div>

            </div>
            }



        </div>
    )
}

export default ProductPage;