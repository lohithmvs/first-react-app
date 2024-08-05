import { Navbar } from "react-bootstrap";
import NavbarStatic from "../NavBar/navbarStatic";
import { useContext } from "react";

import NavbarEx1 from "../NavBar/navbarEx1";
import { DataContext } from "../App";
const Setting=()=>{
    const {username,darkG,changeUsername}=useContext(DataContext);
    const changeUs=()=>{
        changeUsername("fasil");
    }
    return(
        <>
            <NavbarEx1/>
            <h3>Welcome to {username}</h3>
            <button onClick={changeUs}>change username</button>
        </>
    )
}
export default Setting;