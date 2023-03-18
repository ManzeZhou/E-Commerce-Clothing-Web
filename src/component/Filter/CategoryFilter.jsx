import {useSelector} from "react-redux";
import {useState} from "react";
import InputFilter from "./InputFilter";

export const CategoryFilter = ({category, filters}) => {

    const filterTitle = 'Category'


    const [hide, setHide] = useState(true)

    const handleHide = () => {
        setHide(!hide)
    }
    return (
        <div>
            <h1>{filterTitle}</h1>
            {category && category.map((i, index) => {

                    // todo read more icon

                if (!hide) {
                    return <InputFilter i={i} key={index} filters={filters} filterTitle={filterTitle}/>
                } else if(index < 5 && hide) {
                    return <InputFilter i={i} key={index} filters={filters} filterTitle={filterTitle}/>
                }

            })
            }

            <button onClick={() => {handleHide()}}>{hide ? 'show more' : 'show less'}</button>
        </div>
    )


}

export default CategoryFilter;