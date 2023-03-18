
import InputFilter from "./InputFilter";



export const GenderFilter = ({gender, filters}) => {

    const filterTitle = 'Gender'



    return (
        <div>
            <h1>{filterTitle}</h1>
            {gender && gender.map((i, index) => {

                                    return <InputFilter i={i} key={index} filters={filters} filterTitle={filterTitle}/>
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