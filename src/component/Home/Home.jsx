import {useSelector} from "react-redux";
import {Filter} from "../Filter/Filter";
import Products from "../Products/Products";


const Home = () => {

    const rawData = useSelector(state => state?.LuLuReducer?.rawData);

    const filters = rawData?.filters;

    const products = rawData?.products;

    console.log('Home',rawData)

    return (
        <div>

            {rawData &&
                <div className='main-content'>

                    <Filter filtersData={filters}/>
                    <Products products={products}/>

                </div>}
        </div>
    )
}

export default Home;