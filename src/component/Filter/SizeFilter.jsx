import {useSelector} from "react-redux";


const SizeFilter = ({size}) => {




    const cupSize = ['B', 'C', 'D', 'DD', 'DDD']



    return (
        <div>
            <h2>Size</h2>
            <div>
                <ul>
                    {size && size.map((size, index) => {

                        // todo sizeDivider style
                        return (size.name === 'sizeDivider' ?

                                <p>.....</p> : <li key={index}>
                                    <a href="">
                                    <span>
                                 {size.name}
                                     </span>
                                    </a>
                                </li>
                        )


                    })}
                </ul>
            </div>
        </div>
    )
};


export default SizeFilter;
