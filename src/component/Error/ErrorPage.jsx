import {Link} from "react-router-dom";

const ErrorPage = () => {

    return (
        <div>
            <h1>404 NOT FOUND</h1>
            <Link to='/'><button>Go to Home</button></Link>
        </div>
    )
}

export default ErrorPage;