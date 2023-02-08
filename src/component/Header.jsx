import {Outlet} from "react-router-dom";


const Header = () => {

    return (
        <div>
            <h1>This is Header Component</h1>
            <Outlet/>
        </div>
    )
}

export default Header;