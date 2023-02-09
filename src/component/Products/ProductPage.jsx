import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


const ProductPage = () => {





    const rawData = useSelector(state => state?.LuLuReducer?.rawData);

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




    console.log('currentProduct', currentProduct);


    return (
        <div>


            {products && currentProduct &&
            <div>
                <h1>THis is product page</h1>
                <h2>productId: {id}</h2>
                <h2>{name}</h2>
                <h2>{price}</h2>

                <img src={currentProduct?.images[0]?.mainCarousel?.media?.split('|')[0]}
                     alt={currentProduct?.name}
                     width='100px'
                     height='100px'/>

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
            }



        </div>
    )
}

export default ProductPage;