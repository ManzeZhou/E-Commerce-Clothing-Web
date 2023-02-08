import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const ProductPage = () => {

    const rawData = useSelector(state => state?.LuLuReducer?.rawData);

    const products = rawData?.products;

    const {id} = useParams();

    const currentProduct = products?.[parseInt(id)];

    const {name, price, images} = currentProduct;


    console.log('currentProduct',currentProduct)

    console.log('product Id',id)
    return (
        <div>
           <h1>THis is product page</h1>
            <h2>productId: {id}</h2>
            <h2>{name}</h2>
            <h2>{price}</h2>

            <img src={currentProduct?.images[0]?.mainCarousel?.media?.split('|')[0]}
                 alt={currentProduct?.name}
                 width='100px'
                 height='100px'/>

        </div>
    )
}

export default ProductPage;