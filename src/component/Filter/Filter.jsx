

import CheckBoxFilter from "./CheckBoxFilter";



export const Filter = ({filtersData}) => {




    const entries = Object.entries(filtersData);


// todo use template for box filter and color filter

    return (
       <div>

           {filtersData && entries.map(([key, value], index) => {return <CheckBoxFilter filterTitle={key} titleValue={value}  filtersData={filtersData} key={index}/>}
           )}

       </div>
    )
}