
import {useState} from "react";
import InputFilter from "./InputFilter";

export const CheckBoxFilter = ({category, filters, filterTitle, titleValue, setFilters}) => {

    // const filterTitle = 'Category'


    const [hide, setHide] = useState(true)

    const handleHide = () => {
        setHide(!hide)
    }
    return (
        // <div>
        //     <h1>{filterTitle}</h1>
        //     {category && category.map((i, index) => {
        //
        //         // todo read more icon
        //
        //         if (!hide) {
        //             return <InputFilter i={i} key={index} filters={filters} filterTitle={filterTitle}/>
        //         } else if(index < 5 && hide) {
        //             return <InputFilter i={i} key={index} filters={filters} filterTitle={filterTitle}/>
        //         }
        //
        //     })
        //     }
        //
        //     <button onClick={() => {handleHide()}}>{hide ? 'show more' : 'show less'}</button>
        // </div>

        <div>
            <h1>{filterTitle}</h1>
            {titleValue && titleValue.map((i, index) => {

                // todo read more icon

                if (!hide) {
                    return <InputFilter i={i} key={index} filters={filters} filterTitle={filterTitle} setFilters={setFilters}/>
                } else if(index < 5 && hide) {
                    return <InputFilter i={i} key={index} filters={filters} filterTitle={filterTitle} setFilters={setFilters}/>
                }

            })
            }

            <button onClick={() => {handleHide()}}>{hide ? 'show more' : 'show less'}</button>
        </div>
    )


}

export default CheckBoxFilter;