import {useSelector} from "react-redux";
import {useState} from "react";

export const CategoryFilter = ({category}) => {



    const [hide, setHide] = useState(true)

    const handleHide = (e) => {
        setHide(!hide)
    }
    return (
        <div>
            <h1>Category</h1>
            {category && category.map((i, index) => {

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