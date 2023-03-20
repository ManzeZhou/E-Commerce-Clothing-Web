
import InputFilter from "./InputFilter";



export const GenderFilter = ({gender, filters, selectedFilters}) => {

    const filterTitle = 'Gender'



    return (
        <div>
            <h1>{filterTitle}</h1>
            {gender && gender.map((i, index) => {

                                    return <InputFilter i={i} key={index} filters={filters} filterTitle={filterTitle} selectedFilters={selectedFilters}/>

                            })
                        }
        </div>
    )



}

export default GenderFilter;