import {useSelector} from "react-redux";
import {useState} from "react";

export const CategoryFilter = () => {
    const rawData = useSelector(state => state?.LuLuReducer?.rawData)

    const categoryFilter = rawData?.filters?.Category

    console.log(categoryFilter)

    const [hide, setHide] = useState(true)

    const handleHide = (e) => {
        setHide(!hide)
    }
    return (
        <div>
            <h1>Gender</h1>
            {categoryFilter && categoryFilter.map((i, index) => {

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

export default CategoryFilter;