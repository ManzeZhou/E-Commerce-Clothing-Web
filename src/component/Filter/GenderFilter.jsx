import {useSelector} from "react-redux";
import InputFilter from "./InputFilter";



export const GenderFilter = ({gender, filters}) => {





    return (
        <div>
            <h1>Gender</h1>
            {gender && gender.map((i, index) => {

                                    return <InputFilter i={i} key={index} filters={filters}/>
                // (
                //                         <div key={index}>
                //                             <input type="checkbox"/>
                //                             <label>{i.name}</label>
                //                         </div>
                //                     )

                            })
                        }
        </div>
    )



}

export default GenderFilter;