import {useSelector} from "react-redux";


const SizeFilter = () => {

    const rawData = useSelector(state => state?.LuLuReducer?.rawData)

    const sizeFilter = rawData?.filters?.Size

    console.log(sizeFilter);

    const cupSize = ['B','C', 'D', 'DD', 'DDD']

    return (
        <div>
            <h2>Size</h2>
            <div>
                <ul>
                    {sizeFilter && sizeFilter.map((size, index) => {
                        if(parseInt(size.name) <= 33) {
                            return <li key={index}>
                                <a href="">
                                <span>
                                    {size.name}
                                </span>
                                </a>
                            </li>
                        } else if(parseInt(size.name) <= 42){
                            // todo add cup size
                            return <li key={index}>
                                <a href="">
                                <span>
                                    {size.name}
                                </span>
                                </a>
                            </li>
                        } else {
                            return <li key={index}>
                                <a href="">
                                <span>
                                    {size.name}
                                </span>
                                </a>
                            </li>
                        }
                    })}
                </ul>
            </div>
        </div>
    )
};


export default SizeFilter;
