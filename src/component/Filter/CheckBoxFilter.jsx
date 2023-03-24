
import {useState} from "react";
import InputFilter from "./InputFilter";

export const CheckBoxFilter = ({filterTitle, titleValue, filtersData}) => {



    const [hide, setHide] = useState(true)

    const handleHide = () => {
        setHide(!hide)
    }
    return (

        <div>
            <h1>{filterTitle}</h1>
            {titleValue && titleValue.map((i, index) => {

                // todo read more icon

                // if (!hide) {
                //     return <InputFilter i={i} key={index} filterTitle={filterTitle}  filtersData={filtersData}/>
                // } else if(index < 5 && hide) {
                //     return <InputFilter i={i} key={index} filterTitle={filterTitle}  filtersData={filtersData}/>
                // }
                if(index < 3) {
                    return <InputFilter i={i} key={index} filterTitle={filterTitle}  filtersData={filtersData}/>
                }

            })
            }

            <button onClick={() => {handleHide()}}>{hide ? 'show more' : 'show less'}</button>
        </div>
    )


}

export default CheckBoxFilter;