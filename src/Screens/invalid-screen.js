import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
const InvalidScreen=()=>{
    return(
        <>
            <h4>Invalid Screen 404 error</h4>
            <button>
                <Link to={"/"}>Go to HomeScreen</Link>
            </button>
        </>
    )
}
export default InvalidScreen;