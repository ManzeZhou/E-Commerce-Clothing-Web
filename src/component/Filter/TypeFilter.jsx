import {useSelector} from "react-redux";
import {useState} from "react";

 const TypeFilter = () => {
    const rawData = useSelector(state => state?.LuLuReducer?.rawData)

    const typeFilter = rawData?.filters?.Type


    const [hide, setHide] = useState(true)

    const handleHide = () => {
        setHide(!hide)
    };

    return (
        <div>
            <h1>Type</h1>
            {typeFilter && typeFilter.map((i, index) => {

                // todo read more icon

                if (!hide) {
                    return <div key={index}>
                        <input type="checkbox"/>
                        <label>{i.name}</label>
                    </div>
                } else if(index < 5 && hide) {
                    return <div key={index}>
                        <input type="checkbox"/>
                        <label>{i.name}</label>
                    </div>
                }

            })
            }

            <button onClick={() => {handleHide()}}>{hide ? 'show more' : 'show less'}</button>
        </div>
    )


}

export default TypeFilter;