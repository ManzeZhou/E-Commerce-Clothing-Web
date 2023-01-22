import {useSelector} from "react-redux";
import {useState} from "react";

 const ActivityFilter = () => {
    const rawData = useSelector(state => state?.LuLuReducer?.rawData)

    const activityFilter = rawData?.filters?.Activity


    const [hide, setHide] = useState(true);

    const handleHide = () => {
        setHide(!hide)
    };

    return (
        <div>
            <h1>Activity</h1>
            {activityFilter && activityFilter.map((i, index) => {

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

export default ActivityFilter;