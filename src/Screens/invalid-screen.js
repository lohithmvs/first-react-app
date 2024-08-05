import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const InvalidScreen=()=>{
    const Navigate=useNavigate();
    const navigateToHome=()=>{
        Navigate("/")
    }
    return(
        <>
            <h4>Invalid Screen 404 error</h4>
            <button onClick={navigateToHome}>go to home</button>
        </>
    )
}
export default InvalidScreen;